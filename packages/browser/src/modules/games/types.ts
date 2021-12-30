import { User } from 'modules/user/types';

export interface Game {
  id: string;
  cover: string | null;
  subtitle: string | null;
  title: string;
  minTime: number | null;
  maxTime: number | null;
  time: number | null;
  age: number | null;
  minPlayers: number | null;
  maxPlayers: number | null;
  players: number | null;
  rate: number | null;
  averageRating: number | null;
  addedBy: User | null;
}
