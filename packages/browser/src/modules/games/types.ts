import { User } from 'modules/user/types';
import { GraphqlNormalize } from 'types';
import { FormData } from 'ui/Form';

export enum Visibility {
  Public = 'public',
  Private = 'private',
  Limited = 'limited',
  Visible = 'visible',
}

export enum OwnStatus {
  Lent = 'lent',
  Owned = 'owned',
  Ordered = 'ordered',
  Founded = 'founded',
  WishList = 'wishlist',
}

interface GameCore {
  age: number | null;
  difficulty: number | null;
  owned: Date | null;
  premiere: Date | null;
  rate: number | null;
  favorite: boolean;
  status: OwnStatus | null;
  subtitle: string | null;
  title: string;
  visibility: Visibility | null;
}

export interface Game extends GameCore, GraphqlNormalize {
  addedBy: User | null;
  averageDifficulty: number | null;
  averageRating: number | null;
  cover: string | null;
  id: string;
  maxPlayers: number | null;
  maxTime: number | null;
  minPlayers: number | null;
  minTime: number | null;
  players: number | null;
  time: number | null;
}

export interface GameForm extends FormData, GameCore {
  players: number[] | null;
  time: number[] | null;
}

export interface CreateGameInput
  extends Omit<
    Partial<Game>,
    | 'addedBy'
    | 'averageRating'
    | 'averageDifficulty'
    | 'id'
    | 'title'
    | 'collection'
  > {
  title: string;
}

export type CreateGameResponse = {
  createGame: Game;
};

export interface CreateGameArgs {
  game: CreateGameInput;
}

export type GamesResponse = { games: Game[] };

export type GamesArgs = {};
