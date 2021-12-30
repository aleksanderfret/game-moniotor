import React, { FC, FormEvent, useState } from 'react';

import { InputChangeHandler } from 'types/types';
import { useGamesQuery } from './useGamesQuery';
import { useCreateGameMutation } from './useCreateGameMutation';

const Games: FC = () => {
  const [title, setTitle] = useState('');
  const [owned, setOwned] = useState(false);
  const { data, loading, error } = useGamesQuery();

  const [createGame] = useCreateGameMutation({
    onCompleted: () => {
      setTitle('');
      setOwned(false);
    },
    onError: error => {
      console.error(error);
    }
  });

  const handleOwnedChange: InputChangeHandler = () => {
    setOwned(owned => !owned);
  };

  const handleTitleChange: InputChangeHandler = event => {
    setTitle(event.target.value);
  };

  const handleCreate = async (event: FormEvent): Promise<Boolean> => {
    event.preventDefault();

    if (!title) {
      return false;
    }

    await createGame({
      variables: { game: { title }, owned },
      optimisticResponse: {
        createGame: {
          addedBy: null,
          age: null,
          averageRating: null,
          cover: null,
          id: 'temp-id',
          maxPlayers: null,
          maxTime: null,
          minPlayers: null,
          minTime: null,
          players: null,
          rate: null,
          subtitle: null,
          time: null,
          title
        }
      }
    });

    return false;
  };

  if (loading && !data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        {error && <div>{error.message}</div>}
        {data &&
          (data?.games?.length === 0 ? (
            <div>No games found</div>
          ) : (
            data.games.map(({ id, title }) => <div key={id}>{title}</div>)
          ))}
      </div>
      <form onSubmit={handleCreate}>
        <div>
          <label>
            Title
            <input onChange={handleTitleChange} type="text" value={title} />
          </label>
        </div>
        <div>
          <label>
            In collection
            <input
              checked={owned}
              disabled={loading}
              onChange={handleOwnedChange}
              type="checkbox"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Games;
