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
  GraphQLISODateTime,
  Float,
} from 'type-graphql';

import { Context } from 'types/types';
import { isAuth } from 'modules/auth/isAuth';
import Game from 'modules/game/entity/gameEntity';
import Collection from 'modules/game/entity/collectionEntity';
import Rate from 'modules/rate/entity/rateEntity';
import Difficulty from './entity/difficultyEntity';
import Favorite from 'modules/favorite/entity/favoriteEntity';
import { OwnStatus, Visibility } from './enums';

@InputType()
class GameInput implements Partial<Game> {
  @Field({ nullable: false })
  title!: string;

  @Field({ nullable: true })
  subtitle!: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  owned!: Date;

  @Field({ nullable: true })
  favorite!: boolean;

  @Field(() => GraphQLISODateTime, { nullable: true })
  premiere!: Date;

  @Field({ nullable: true })
  age!: number;

  @Field({ nullable: true })
  rate!: number;

  @Field({ nullable: true })
  difficulty!: number;

  @Field({ nullable: true })
  minTime!: number;

  @Field({ nullable: true })
  maxTime!: number;

  @Field({ nullable: true })
  maxPlayers!: number;

  @Field({ nullable: true })
  minPlayers!: number;

  @Field({ nullable: true })
  visibility!: Visibility;

  @Field({ nullable: true })
  status!: OwnStatus;
}

@Resolver(() => Game)
export class GameResolver {
  @UseMiddleware(isAuth)
  @Query(() => [Game])
  async games(@Ctx() { user }: Context): Promise<Game[]> {
    const games = await getConnection()
      .getRepository(Game)
      .createQueryBuilder('game')
      .leftJoinAndSelect('game.publisher', 'publisher')
      .leftJoinAndSelect('game.designers', 'designer')
      .leftJoinAndSelect('game.difficulties', 'difficulty')
      .leftJoinAndSelect('game.artists', 'artist')
      .leftJoinAndSelect('game.categories', 'category')
      .leftJoinAndSelect('game.mechanics', 'mechanics')
      .leftJoinAndSelect('game.reviews', 'review')
      .leftJoinAndSelect('game.gameType', 'gameType')
      .leftJoinAndSelect('game.favorites', 'favorite')
      .leftJoinAndSelect('game.rates', 'rate')
      .leftJoinAndSelect('game.addedBy', 'user')
      .leftJoinAndSelect('game.collection', 'collection')
      .where('collection.userId = :userId', { userId: user?.id })
      .orWhere('game.visibility = :visibility', {
        visibility: Visibility.Public,
      })
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
    @Arg('game') game: GameInput
  ): Promise<Game | undefined> {
    try {
      if (user) {
        console.log('##############################################');
        console.log(game);
        console.log('##############################################');
        const { owned, status, rate, difficulty, favorite, ...rest } = game;
        const createdGame = await Game.create({
          ...rest,
          addedBy: user,
        }).save();

        if (status) {
          const collection = await Collection.create({
            game: createdGame,
            owned,
            status,
            user,
          });
          createdGame.collection = [collection];
        }

        if (rate) {
          const gameRate = await Rate.create({
            game: createdGame,
            rate,
            user,
          });
          createdGame.rates = [gameRate];
        }
        // if (difficulty) {
        //   console.log('DIFFICULTY', difficulty);
        //   const gameDifficulty = await Difficulty.create({
        //     difficulty,
        //     game: createdGame,
        //     user,
        //   });
        //   console.log('zapisana difficulty', difficulty);
        //   createdGame.difficulties = [gameDifficulty];
        // }

        // const gameFavorite = await Favorite.create({
        //   favorite: Boolean(favorite),
        //   game: createdGame,
        //   user,
        // });
        // console.log('zapisana favorite', favorite);
        // createdGame.favorites = [gameFavorite];

        await createdGame.save();

        console.log('zapisana gra');

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
            'favorites',
            'difficulties',
          ],
          where: { id },
        });

        console.log('NEW GAME', newGame);

        return newGame;
      }
    } catch (error) {
      console.error(error);
    }
  }

  @UseMiddleware(isAuth)
  @FieldResolver(() => Float, { nullable: true })
  async averageRating(@Root() game: Game): Promise<number | null> {
    const rates = await Rate.find({
      select: ['rate'],
      where: { game: game.id },
    });

    console.log(rates);
    const sum = rates.reduce((a: number, b: Rate) => a + b.rate, 0);

    return rates.length ? sum / rates.length : null;
  }

  @UseMiddleware(isAuth)
  @FieldResolver(() => Number, { nullable: true })
  async rate(
    @Root() game: Game,
    @Ctx() { user }: Context
  ): Promise<number | null> {
    const rate = await Rate.findOne({
      select: ['rate'],
      where: [{ game: game.id }, { user }],
    });
    console.log('RATE', rate);

    return rate ? rate.rate : null;
  }

  @UseMiddleware(isAuth)
  @FieldResolver(() => Float, { nullable: true })
  async averageDifficulty(@Root() game: Game): Promise<number | null> {
    const difficulties = await Difficulty.find({
      select: ['difficulty'],
      where: { game: game.id },
    });
    const sum = difficulties.reduce(
      (a: number, b: Difficulty) => a + b.difficulty,
      0
    );

    return difficulties.length ? sum / difficulties.length : null;
  }

  @UseMiddleware(isAuth)
  @FieldResolver(() => Number, { nullable: true })
  async difficulty(
    @Root() game: Game,
    @Ctx() { user }: Context
  ): Promise<number | null> {
    const difficulty = await Difficulty.findOne({
      select: ['difficulty'],
      where: [{ game: game.id }, { user }],
    });

    return difficulty ? difficulty.difficulty : null;
  }

  @UseMiddleware(isAuth)
  @FieldResolver(() => Boolean, { nullable: true })
  async favorite(
    @Root() game: Game,
    @Ctx() { user }: Context
  ): Promise<boolean> {
    const favorite = await Favorite.findOne({
      select: ['favorite'],
      where: [{ game: game.id }, { user }],
    });

    return Boolean(favorite?.favorite);
  }
  @UseMiddleware(isAuth)
  @FieldResolver(() => Boolean, { nullable: true })
  async status(
    @Root() game: Game,
    @Ctx() { user }: Context
  ): Promise<OwnStatus | null> {
    // const { collection } = game;
    // console.log('COLLECTION', collection);
    // const { status } = collection.find(c => c.user.id === user?.id) || {};
    const { status } =
      (await Collection.findOne({
        select: ['status'],
        where: [{ game: game.id }, { user }],
      })) || {};

    return status || null;
  }

  // @UseMiddleware(isAuth)
  // @FieldResolver(() => Boolean, { nullable: true })
  // async owned(@Root() game: Game, @Ctx() { user }: Context): Promise<Date> {
  //   const favorite = await Collection.findOne({
  //     select: ['favorite'],
  //     where: [{ game: game.id }, { user }],
  //   });

  //   return Boolean(favorite?.favorite);
  // }
}
