import { User } from 'modules/user/types';
import { FormData } from 'ui/Form';

export enum Visibility {
  Public = 'public',
  Private = 'private',
  Limited = 'limited',
  Visible = 'visible',
}

export enum OwnStatus {
  Owned = 'owned',
  Ordered = 'ordered',
  Founded = 'founded',
  WishList = 'wishlist',
}

export enum Rate {
  Climate = 'climate',
  General = 'general',
  GamePlay = 'gamePlay',
  Workmanship = 'workmanship',
}

export interface GameForm extends FormData {
  age: number | null;
  owned: string | null;
  players: number[] | null;
  premiere: Date | null;
  rateGeneral: number | null;
  rateClimate: number | null;
  rateGamePlay: number | null;
  rateWorkmanship: number | null;
  favorite: boolean;
  status: OwnStatus | null;
  subtitle: string | null;
  time: number[] | null;
  title: string;
  visibility: Visibility | null;
}

export interface Game extends Omit<GameForm, 'players' | 'time' | 'premiere'> {
  addedBy: User | null;
  averageRating: number | null;
  cover: string | null;
  id: string;
  maxPlayers: number | null;
  maxTime: number | null;
  minPlayers: number | null;
  minTime: number | null;
  players: number | null;
  premiere: string | null;
  time: number | null;
}
