import { getConnection } from 'typeorm';
import {
  Ctx,
  Query,
  Field,
  InputType,
  Resolver,
  UseMiddleware,
  Mutation,
  Arg,
  FieldResolver,
  Root,
  Float,
} from 'type-graphql';

import { Context } from 'types/types';
import { isAuth } from 'modules/auth/isAuth';
import Game from 'modules/game/entity/gameEntity';
import Collection from 'modules/game/entity/collectionEntity';
import Rate from 'modules/rate/entity/rateEntity';

@InputType()
class GameInput implements Partial<Game> {
  @Field()
  title!: string;
}
@Resolver(() => Game)
export class GameResolver {
  @Query(() => String)
  hello() {
    return 'hi!';
  }

  @UseMiddleware(isAuth)
  @Query(() => [Game])
  async games(@Ctx() { user }: Context): Promise<Game[]> {
    const games = await getConnection()
      .getRepository(Game)
      .createQueryBuilder('game')
      .leftJoinAndSelect('game.publisher', 'publisher')
      .leftJoinAndSelect('game.designers', 'designer')
      .leftJoinAndSelect('game.artists', 'artist')
      .leftJoinAndSelect('game.categories', 'category')
      .leftJoinAndSelect('game.mechanics', 'mechanics')
      .leftJoinAndSelect('game.reviews', 'review')
      .leftJoinAndSelect('game.gameType', 'gameType')
      .leftJoinAndSelect('game.rates', 'rate')
      .leftJoinAndSelect('game.addedBy', 'user')
      .leftJoinAndSelect('game.collection', 'collection')
      .where('collection.userId = :userId', { userId: user?.id })
      .orWhere('game.private = :private', { private: false })
      .getMany();

    return games;
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
          'rates',
        ],
        where: { collector: user?.id },
      });
    } catch (error) {
      console.error(error);
    }
  }

  @UseMiddleware(isAuth)
  @Mutation(() => Game)
  async createGame(
    @Ctx() { user }: Context,
    @Arg('game') game: GameInput,
    @Arg('owned') owned: boolean
  ): Promise<Game | undefined> {
    try {
      if (user) {
        const createdGame = await Game.create({
          ...game,
          addedBy: user,
        }).save();

        if (owned) {
          const collection = await Collection.create({
            game: createdGame,
            owned: new Date(),
            user,
          });
          createdGame.collection = [collection];
        }

        await createdGame.save();

        const { id } = createdGame;

        const newGame = await Game.findOne({
          relations: [
            'publisher',
            'designers',
            'artists',
            'categories',
            'mechanics',
            'reviews',
            'gameType',
            'rates',
            'addedBy',
            'collection',
          ],
          where: { id },
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

  @FieldResolver(() => Float, { nullable: true })
  async averageRating(@Root() game: Game): Promise<number | null> {
    const rates = await Rate.find({
      select: ['rate'],
      where: { game: game.id },
    });
    const sum = rates.reduce((a: number, b: Rate) => a + b.rate, 0);

    return rates.length ? sum / rates.length : null;
  }

  @FieldResolver(() => Number, { nullable: true })
  async rate(
    @Root() game: Game,
    @Ctx() { user }: Context
  ): Promise<number | null> {
    const rate = await Rate.findOne({
      select: ['rate'],
      where: [{ game: game.id }, { user }],
    });

    return rate ? rate.rate : null;
  }
}
