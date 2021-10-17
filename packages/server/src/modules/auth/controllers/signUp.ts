import { Request, Response, RequestHandler } from 'express';
import { hash } from 'bcryptjs';

import environment from 'env/env';
import { sendSignUpConfirmation } from 'modules/mailer';
import User from 'modules/user/entity';
import Token from 'modules/auth/entity';
import { createToken } from 'modules/auth/sign';
import { Status, TokenType } from 'modules/auth/enums';

const { APP_URL, CONFIRM_SIGN_UP_TOKEN_EXP } = environment;

interface SignUpPayload {
  email: string;
  password: string;
  passwordConfirmation: string;
  policy: Date;
}

interface SignUpRequest extends Request {
  body: SignUpPayload;
}

const signUp: RequestHandler = async (
  req: SignUpRequest,
  res: Response
): Promise<Response> => {
  const { body, locale } = req;
  const { email, password, passwordConfirmation, policy } = body;

  try {
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
      policy,
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

    await sendSignUpConfirmation({
      locale,
      recipient: email,
      redirectUrl,
      user: { email }
    });
  } catch (error) {
    console.error(error);

    return res.status(400).send({ message: 'dupa' });
  }

  return res.status(400).send({ message: 'dupa' });
};

export default signUp;
