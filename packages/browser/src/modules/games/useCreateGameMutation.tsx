import { MutationHookOptions, useMutation } from '@apollo/client';

import { Game, OwnStatus, Visibility } from './types';
import GAMES from './games.graphql';
import { GamesResponse } from './useGamesQuery';
import CREATE_GAME from './createGame.graphql';

export type CreateGameResponse = {
  createGame: Game;
};

interface CreateGameArgs {
  game: {
    age: number | null;
    cover: string | null;
    favorite: boolean;
    maxPlayers: number | null;
    maxTime: number | null;
    minPlayers: number | null;
    minTime: number | null;
    owned: string | null;
    players: number | null;
    premiere: string | null;
    rateClimate: number | null;
    rateGamePlay: number | null;
    rateGeneral: number | null;
    rateWorkmanship: number | null;
    status: OwnStatus | null;
    subtitle: string | null;
    time: number | null;
    title: string;
    visibility: Visibility | null;
  };
}

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
