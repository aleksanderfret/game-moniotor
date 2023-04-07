/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useCallback } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';

import { useCreateGameMutation } from './useCreateGameMutation';
import { filterUndefined, randomKey } from 'utils';
import { Rating } from 'ui/Rating';
import { DatePicker } from 'ui/DatePicker';
import { enumToRadio, RadioGroup } from 'ui/RadioGroup';
import { Favorite } from 'ui/Favorite';
import { filterForm, Form } from 'ui/Form';
import { Slider } from 'ui/Slider';
import { TextField } from 'ui/TextField';
import { CreateGameInput, GameForm, OwnStatus, Visibility } from './types';
import { AsyncButton } from 'ui/Button';

const initialGameData = {
  age: null, //done
  cover: null,
  difficulty: null, //done
  favorite: false, // done
  id: '', //done
  maxPlayers: null, //done
  maxTime: null, //done
  minPlayers: null, //done
  minTime: null, //done
  owned: null,
  players: null, //done
  premiere: null,
  rate: null,
  status: null,
  subtitle: null, //done
  time: null, //done
  title: '', //done
  visibility: null,
};

const formValues: GameForm = {
  age: null,
  difficulty: null,
  favorite: false,
  owned: null,
  players: [],
  premiere: null,
  rate: null,
  status: null,
  subtitle: '',
  time: [],
  title: '',
  visibility: null,
};

const statusOptions = enumToRadio(OwnStatus);
const visibilityOptions = enumToRadio(Visibility);

const CreateGame = ({
  dsasd,
}: {
  dsasd: UseFormRegister<GameForm>;
}): JSX.Element => {
  const { formatMessage: f } = useIntl();
  const {
    handleSubmit,
    register,
    control,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      ...formValues,
    },
    mode: 'onChange',
  });

  const [createGame, { loading }] = useCreateGameMutation({
    onError: error => {
      console.error(error);
    },
  });
  const handleAriaLabel = useCallback(
    (index: number) => {
      const value = f({
        id: index === 0 ? 'common.minimum' : 'common.maximum',
      });

      return f({ id: 'game.players-label' }, { value });
    },
    [f]
  );
  const handleCreate = useCallback(
    (data: Partial<GameForm>) => {
      const { players, premiere, time, title = '', ...rest } = data;
      const [minPlayers, maxPlayers] = players || [];
      const [minTime, maxTime] = time || [];

      const game: CreateGameInput = {
        ...rest,
        maxPlayers,
        maxTime,
        minPlayers,
        minTime,

        premiere,
        title,
      };
      createGame({
        variables: {
          game: filterUndefined(game),
        },
        optimisticResponse: {
          createGame: {
            ...initialGameData,
            ...rest,
            maxTime: time ? time[1] : null,
            minTime: time ? time[0] : null,
            minPlayers: players ? players[0] : null,
            maxPlayers: players ? players[1] : null,
            premiere: premiere ? premiere : null,
            addedBy: null,
            averageRating: null,
            averageDifficulty: null,
            id: randomKey(),
            __typename: 'Game',
          },
        },
      });
    },
    [createGame]
  );

  const handleCreateGame = handleSubmit((data: GameForm) => {
    if (isValid) {
      handleCreate(filterForm(data, formValues));
    }
  });

  return (
    <Paper>
      New Game
      <Form onSubmit={handleCreateGame}>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <TextField
              control={control}
              disabled={loading}
              fullWidth
              label={f({ id: 'game.title' })}
              name="title"
              rules={{ required: true }}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              control={control}
              disabled={loading}
              fullWidth
              label={f({ id: 'game.subtitle' })}
              name="subtitle"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <RadioGroup
              control={control}
              label={f({ id: 'game.status' })}
              name="status"
              options={statusOptions}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <RadioGroup
              control={control}
              label={f({ id: 'game.visibility' })}
              name="visibility"
              options={visibilityOptions}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <DatePicker
              control={control}
              label={f({ id: 'game.owned' })}
              name="owned"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <DatePicker
              control={control}
              label={f({ id: 'game.premiere' })}
              name="premiere"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Slider
              control={control}
              defaultValue={[2, 4]}
              getAriaLabel={handleAriaLabel}
              label={f({ id: 'game.players-label' }, { value: 4 })}
              max={32}
              min={1}
              name="players"
              size="medium"
              step={1}
              valueLabelDisplay="auto"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Slider
              control={control}
              defaultValue={[20, 60]}
              getAriaLabel={handleAriaLabel}
              label={f({ id: 'game.time' })}
              max={480}
              min={5}
              name="time"
              size="medium"
              step={5}
              valueLabelDisplay="auto"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Slider
              control={control}
              defaultValue={14}
              getAriaLabel={handleAriaLabel}
              label={f({ id: 'game.age' })}
              max={120}
              min={1}
              name="age"
              size="medium"
              step={1}
              valueLabelDisplay="auto"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Rating
              control={control}
              label={f({ id: 'common.rate' })}
              max={10}
              name="rate"
              size="large"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Rating
              control={control}
              label={f({ id: 'common.difficulty' })}
              max={5}
              name="difficulty"
              size="large"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Favorite
              control={control}
              label={f(
                {
                  id: 'common.favorite',
                },
                { kind: 'she' }
              )}
              name="favorite"
            />
          </Grid>
        </Grid>
        <AsyncButton disabled={!isValid} loading={loading} type="submit">
          {f({ id: 'common.create' })}
        </AsyncButton>
      </Form>
    </Paper>
  );
};

export default CreateGame;
