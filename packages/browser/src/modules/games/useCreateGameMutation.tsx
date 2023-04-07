import { MutationHookOptions, useMutation } from '@apollo/client';

import {
  CreateGameArgs,
  CreateGameResponse,
  Game,
  GamesResponse,
} from './types';
import GAMES from './games.graphql';
import CREATE_GAME from './createGame.graphql';

export function useCreateGameMutation(
  baseOptions?: MutationHookOptions<CreateGameResponse, CreateGameArgs>
) {
  const options = { ...baseOptions };

  return useMutation<CreateGameResponse, CreateGameArgs>(CREATE_GAME, {
    ...options,
    update: (cache, { data }) => {
      if (!data) {
        return null;
      }

      const cachedGames = cache.readQuery<GamesResponse>({ query: GAMES });
      const { games = [] } = cachedGames || {};

      cache.writeQuery<{ games: Game[] }>({
        query: GAMES,
        data: { games: [...games, data.createGame] },
      });
    },
  });
}
