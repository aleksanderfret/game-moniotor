import React, { FC, FormEvent, useState } from 'react';

import { InputChangeHandler } from 'types/types';
import { useCreateGameMutation } from './useCreateGameMutation';
import randomKey from 'utils/randomKey';

const initialGameData = {
  addedBy: null,
  age: null,
  averageRating: null,
  cover: null,
  id: '',
  maxPlayers: null,
  maxTime: null,
  minPlayers: null,
  minTime: null,
  players: null,
  rate: null,
  subtitle: null,
  time: null,
  title: ''
};

const CreateGame: FC = () => {
  const [title, setTitle] = useState('');
  const [owned, setOwned] = useState(false);

  const [createGame, { loading }] = useCreateGameMutation({
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
          ...initialGameData,
          title,
          id: randomKey()
        }
      }
    });

    return false;
  };

  return (
    <div>
      New Game
      <div>
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
    </div>
  );
};

export default CreateGame;
