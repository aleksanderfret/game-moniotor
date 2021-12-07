import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Resolver,
  UseMiddleware
} from 'type-graphql';
import { getManager } from 'typeorm';
import { compare, hash } from 'bcryptjs';

import { TokenType } from './enums';
import {
  createAccessToken,
  createRefreshToken,
  createToken,
  verifyToken
} from 'modules/auth/sign';
import isAuth from './isAuth';
import { sendRefreshToken } from './sendTokenCookie';
import Token from './entity/tokenEntity';
import {
  sendRemoveAccountConfirmation,
  sendResetPasswordConfirmation,
  sendSignUpConfirmation
} from 'modules/mailer';
import { Context } from 'types/types';
import User from 'modules/user/entity/userEntity';
import { Status } from 'modules/user/enums';
import environment from 'env/environment';

const {
  APP_URL,
  CONFIRM_SIGN_UP_TOKEN_EXP,
  FORGOT_PASSWORD_TOKEN_EXP,
  REMOVE_ACCOUNT_TOKEN_EXP
} = environment;

@ObjectType()
class SignInResponse {
  @Field(() => User)
  user!: User;
  @Field()
  accessToken!: string;
}

@ObjectType()
class ChangePasswordResponse {
  @Field()
  accessToken!: string;
}

@Resolver()
export class AuthResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => ChangePasswordResponse)
  async changePassword(
    @Arg('email') email: string,
    @Arg('oldPassword') oldPassword: string,
    @Arg('password') password: string,
    @Arg('passwordConfirmation') passwordConfirmation: string,
    @Ctx() { res }: Context
  ) {
    if (password !== passwordConfirmation) {
      throw new Error('Password mismatch');
    }

    const user = await User.findOne({
      email,
      status: Status.Active
    });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const valid = await compare(oldPassword, user.password);

    if (!valid) {
      throw new Error('Invalid credentials');
    }

    const hashedPassword = await hash(password, 12);
    const tokenVersion = user.tokenVersion + 1;
    user.password = hashedPassword;
    user.tokenVersion = tokenVersion;

    await user.save();

    res.clearCookie('refreshToken', { path: '/api/auth/refresh-token' });

    sendRefreshToken(res, createRefreshToken(user.id, tokenVersion));

    return {
      accessToken: createAccessToken(user.id, tokenVersion)
    };
  }

  @Mutation(() => Boolean)
  async confirmSignUp(@Arg('tokenId') tokenId: string) {
    const token = await Token.findOne({ id: tokenId });

    if (!token) {
      throw new Error();
    }

    const { token: jwtToken } = token;

    const payload = verifyToken(jwtToken, {
      ignoreExpiration: true
    });

    const { exp, userId: id } = payload;

    const user = await User.findOne({
      id,
      status: Status.Active
    });

    if (!user) {
      throw new Error();
    }
    const { status } = user;

    if (Date.now() >= exp * 1000 && status === Status.Registered) {
      await User.delete({ id });

      throw new Error('Link has expired');
    }

    await getManager().update(
      User,
      { id, status: Status.Registered },
      { activeAt: new Date(), status: Status.Active }
    );

    return true;
  }

  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg('email') email: string,
    @Ctx() { req: { locale } }: Context
  ) {
    const user = await User.findOne({
      email,
      status: Status.Active
    });
    if (user) {
      const { id } = user;

      await Token.delete({ type: TokenType.ResetPassword, user });

      await getManager().increment(User, { id }, 'tokenVersion', 1);

      const token = createToken(FORGOT_PASSWORD_TOKEN_EXP)(id);

      const {
        identifiers: [{ id: tokenId }]
      } = await Token.insert({
        token,
        type: TokenType.ResetPassword,
        user
      });

      const redirectUrl = `${APP_URL}/reset-password/${tokenId}`;

      try {
        await sendResetPasswordConfirmation({
          locale,
          recipient: email,
          redirectUrl,
          user: { email }
        });
      } catch {
        throw new Error('Sending confirmation failed');
      }
    }

    return true;
  }

  @UseMiddleware(isAuth)
  @Mutation(() => Boolean)
  async removeAccount(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() { req: { locale }, user }: Context
  ) {
    if (user) {
      const { id, password } = user;

      const valid = await compare(password, user.password);

      if (email !== user.email && !valid) {
        throw new Error('Invalid credentials');
      }

      await Token.delete({ type: TokenType.DeleteAccount, user: user });

      const token = createToken(REMOVE_ACCOUNT_TOKEN_EXP)(id);

      const {
        identifiers: [{ id: tokenId }]
      } = await Token.insert({
        token,
        type: TokenType.ResetPassword,
        user
      });

      const redirectUrl = `${APP_URL}/remove-account/${tokenId}`;

      try {
        await sendRemoveAccountConfirmation({
          locale,
          recipient: email,
          redirectUrl,
          user: { email }
        });
      } catch {
        throw new Error('Sending confirmation failed');
      }
    }
  }

  @Mutation(() => Boolean)
  async removeAccountConfirmation(@Arg('tokenId') tokenId: string) {
    const token = await Token.findOne({ id: tokenId });

    if (!token) {
      throw new Error();
    }

    const { token: jwtToken } = token;

    const payload = verifyToken(jwtToken, {
      ignoreExpiration: true
    });

    const { exp, userId: id } = payload;

    if (Date.now() >= exp * 1000) {
      throw new Error('Link has expired');
    }

    const user = await User.findOne({ id });

    if (user) {
      const { email } = user;

      const hashedEmail = await hash(email, 12);

      user.avatarUrl = '';
      user.deletedAt = new Date();
      user.email = hashedEmail;
      user.name = '';
      user.password = '';
      user.provider = '';
      user.status = Status.Deleted;

      await user.save();
      await Token.delete({ id: tokenId });
    }

    return true;
  }

  @Mutation(() => Boolean)
  async resetPassword(
    @Arg('tokenId') tokenId: string,
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Arg('passwordConfirmation') passwordConfirmation: string,
    @Ctx() { res }: Context
  ) {
    if (password !== passwordConfirmation) {
      throw new Error('Password mismatch');
    }

    if (!tokenId) {
      throw new Error('link invalid');
    }

    const token = await Token.findOne({ id: tokenId });

    if (!token) {
      throw new Error();
    }

    const { token: jwtToken } = token;

    const payload = verifyToken(jwtToken, {
      ignoreExpiration: true
    });

    const { exp, userId: id } = payload;

    if (Date.now() >= exp * 1000) {
      throw new Error('Link has expired');
    }

    const user = await User.findOne({
      email,
      status: Status.Active
    });

    if (!user) {
      throw new Error();
    }

    const hashedPassword = await hash(password, 12);
    const tokenVersion = user.tokenVersion + 1;

    await getManager().update(
      User,
      { email, id, status: Status.Active },
      { password: hashedPassword, tokenVersion }
    );

    res.clearCookie('refreshToken', { path: '/api/auth/refresh-token' });

    return true;
  }

  @Mutation(() => SignInResponse)
  async signIn(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() { res }: Context
  ): Promise<SignInResponse> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const valid = await compare(password, user.password);

    if (!valid) {
      throw new Error('Invalid credentials');
    }

    const { id, status, tokenVersion } = user;

    if (status !== Status.Active) {
      throw new Error('Account Not Active');
    }

    sendRefreshToken(res, createRefreshToken(id, tokenVersion));

    return {
      accessToken: createAccessToken(id, tokenVersion),
      user
    };
  }

  @Mutation(() => Boolean)
  async signOut(@Ctx() { res }: Context) {
    res.clearCookie('refreshToken', { path: '/api/auth/refresh-token' });

    return true;
  }

  @Mutation(() => Boolean)
  async signUp(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Arg('passwordConfirmation') passwordConfirmation: string,
    @Arg('policy') policy: string,
    @Ctx() { req: { locale } }: Context
  ) {
    if (password !== passwordConfirmation) {
      throw new Error('Password mismatch');
    }

    const user = await User.findOne({ email });

    if (user) {
      throw new Error('User already exists');
    }

    const hashedPassword = await hash(password, 12);

    const newUser = await User.insert({
      email,
      password: hashedPassword,
      policy: new Date(policy),
      status: Status.Registered
    });

    const { identifiers } = newUser;

    const [{ id }] = identifiers;

    const token = createToken(CONFIRM_SIGN_UP_TOKEN_EXP)(id);

    const {
      identifiers: [{ id: tokenId }]
    } = await Token.insert({
      token,
      type: TokenType.SignUpConfirm,
      user: id
    });

    const redirectUrl = `${APP_URL}/sign-up-confirmation/${tokenId}`;

    try {
      await sendSignUpConfirmation({
        locale,
        recipient: email,
        redirectUrl,
        user: { email }
      });
    } catch (error) {
      console.error(error);

      throw new Error('Sending confirmation failed');
    }

    return true;
  }
}
