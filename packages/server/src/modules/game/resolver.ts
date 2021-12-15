import {
  Ctx,
  Query,
  Resolver,
  UseMiddleware,
  Mutation,
  Arg
} from 'type-graphql';

import { Context } from 'types/types';
import { isAuth } from 'modules/auth/isAuth';
import Game from 'modules/game/entity/gameEntity';

@Resolver()
export class GameResolver {
  @Query(() => String)
  hello() {
    return 'hi!';
  }

  @UseMiddleware(isAuth)
  @Query(() => [Game])
  async games(@Ctx() { user }: Context): Promise<Game[] | undefined> {
    try {
      return Game.find({
        relations: [
          'publisher',
          'designers',
          'artists',
          'categories',
          'mechanics',
          'reviews',
          'gameType',
          'rates'
        ],
        where: [{ private: false }, { collector: user }]
      });
    } catch (error) {
      console.error(error);
    }
  }

  @UseMiddleware(isAuth)
  @Query(() => [Game])
  async myGames(@Ctx() { user }: Context): Promise<Game[] | undefined> {
    try {
      return Game.find({
        relations: [
          'publisher',
          'designers',
          'artists',
          'categories',
          'mechanics',
          'reviews',
          'gameType',
          'rates'
        ],
        where: { collector: user }
      });
    } catch (error) {
      console.error(error);
    }
  }

  @UseMiddleware(isAuth)
  @Mutation(() => Game)
  async createGame(
    @Ctx() { user }: Context,
    @Arg('game') game: Game
  ): Promise<Game | undefined> {
    try {
      if (user) {
        const result = await Game.insert({ ...game, addedBy: user });

        const { identifiers } = result;

        const [{ id }] = identifiers;

        const newGame = await Game.findOne({
          relations: [
            'publisher',
            'designers',
            'artists',
            'categories',
            'mechanics',
            'reviews',
            'gameType',
            'rates'
          ],
          where: { id }
        });

        return newGame;
      }
    } catch (error) {
      console.error(error);
    }
  }

  @UseMiddleware(isAuth)
  @Query(() => Game, { nullable: true })
  async currentUser(@Ctx() { user }: Context) {
    try {
      if (!user) {
        throw new Error();
      }

      const { id } = user;

      const currentUser = await Game.findOne(id);

      return currentUser;
    } catch (error) {
      console.error(error);

      return null;
    }
  }
}
