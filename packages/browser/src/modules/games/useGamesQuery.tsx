import { QueryHookOptions, useQuery } from '@apollo/client';

import { Game } from 'modules/games/types';
import GAMES from './games.graphql';

export type GamesResponse = { games: Game[] };

type GamesArgs = {};

function useGamesQuery(
  baseOptions?: QueryHookOptions<GamesResponse, GamesArgs>
) {
  const options = { ...baseOptions };

  return useQuery<GamesResponse, GamesArgs>(GAMES, options);
}

export { GAMES, useGamesQuery };
