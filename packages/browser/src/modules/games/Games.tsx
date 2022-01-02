import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGamesQuery } from './useGamesQuery';
import { Button } from 'ui/Button';
import { Path } from 'router';

const Games: FC = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useGamesQuery();

  const handleCreateNewGame = (): void => {
    navigate(Path.NewGame);
  };

  if (loading && !data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Button onClick={handleCreateNewGame}>Create game</Button>
      <div>
        {error && <div>{error.message}</div>}
        {data &&
          (data?.games?.length === 0 ? (
            <div>No games found</div>
          ) : (
            data.games.map(({ id, title }) => <div key={id}>{title}</div>)
          ))}
      </div>
    </div>
  );
};

export default Games;
