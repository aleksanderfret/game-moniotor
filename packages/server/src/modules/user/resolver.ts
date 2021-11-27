import { Ctx, Query, Resolver, UseMiddleware } from 'type-graphql';

import { Context } from 'types/types';
import { isAuth } from 'modules/auth/isAuth';
import User from './entity';

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return 'hi!';
  }

  @Query(() => [User])
  users() {
    return User.find();
  }

  @UseMiddleware(isAuth)
  @Query(() => User, { nullable: true })
  async currentUser(@Ctx() { user }: Context) {
    try {
      if (!user) {
        throw new Error();
      }

      const { id } = user;

      const currentUser = await User.findOne(id);

      return currentUser;
    } catch (error) {
      console.error(error);

      return null;
    }
  }
}
