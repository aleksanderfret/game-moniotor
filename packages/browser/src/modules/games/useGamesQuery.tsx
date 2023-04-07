import { QueryHookOptions, useQuery } from '@apollo/client';

import { GamesArgs, GamesResponse } from './types';
import GAMES from './games.graphql';

function useGamesQuery(
  baseOptions?: QueryHookOptions<GamesResponse, GamesArgs>
) {
  const options = { ...baseOptions };

  return useQuery<GamesResponse, GamesArgs>(GAMES, options);
}

export { GAMES, useGamesQuery };
