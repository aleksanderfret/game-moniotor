import React, { useCallback } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';

import { useCreateGameMutation } from './useCreateGameMutation';
import { randomKey } from 'utils';
import { Rating } from 'ui/Rating';
import { DatePicker } from 'ui/DatePicker';
import { enumToRadio, RadioGroup } from 'ui/RadioGroup';
import { Favorite } from 'ui/Favorite';
import { filterForm, Form } from 'ui/Form';
import { Slider } from 'ui/Slider';
import { TextField } from 'ui/TextField';
import { GameForm, OwnStatus, Visibility } from './types';

const initialGameData = {
  age: null, //done
  cover: null,
  favorite: false, // done
  id: '', //done
  maxPlayers: null, //done
  maxTime: null, //done
  minPlayers: null, //done
  minTime: null, //done
  owned: null,
  players: null, //done
  premiere: null,
  rateClimate: null,
  rateGamePlay: null,
  rateGeneral: null,
  rateWorkmanship: null,
  status: null,
  subtitle: null, //done
  time: null, //done
  title: '', //done
  visibility: null,
};

const formValues: GameForm = {
  age: null,
  favorite: false,
  owned: null,
  players: [],
  premiere: null,
  rateClimate: null,
  rateGamePlay: null,
  rateGeneral: null,
  rateWorkmanship: null,
  status: null,
  subtitle: '',
  time: [],
  title: '',
  visibility: null,
};

const statusOptions = enumToRadio(OwnStatus);
const visibilityOptions = enumToRadio(Visibility);

const CreateGame = (): JSX.Element => {
  const { formatMessage } = useIntl();
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      ...formValues,
    },
  });

  const [createGame, { loading }] = useCreateGameMutation({
    onError: error => {
      console.error(error);
    },
  });
  const handleAriaLabel = useCallback(
    (index: number) => {
      const value = formatMessage({
        id: index === 0 ? 'common.minimum' : 'common.maximum',
      });

      return formatMessage({ id: 'game.players-label' }, { value });
    },
    [formatMessage]
  );

  const handleCreate = useCallback(
    (data: Partial<GameForm>) => {
      //TODO change owned to status in Game model and resolver
      const {
        players = [null, null],
        premiere,
        time = [null, null],
        ...rest
      } = data;

      createGame({
        variables: {
          game: {
            ...initialGameData,
            ...rest,
            maxTime: time ? time[1] : null,
            minTime: time ? time[0] : null,
            minPlayers: players ? players[0] : null,
            maxPlayers: players ? players[1] : null,
            premiere: premiere ? premiere.toISOString() : null,
          },
        },
        optimisticResponse: {
          createGame: {
            ...initialGameData,
            ...rest,
            maxTime: time ? time[1] : null,
            minTime: time ? time[0] : null,
            minPlayers: players ? players[0] : null,
            maxPlayers: players ? players[1] : null,
            premiere: premiere ? premiere.toISOString() : null,
            addedBy: null,
            averageRating: null,
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
              label={formatMessage({ id: 'game.title' })}
              name="title"
              rules={{ required: true }}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              control={control}
              disabled={loading}
              fullWidth
              label={formatMessage({ id: 'game.subtitle' })}
              name="subtitle"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <RadioGroup
              control={control}
              label={formatMessage({ id: 'game.status' })}
              name="status"
              options={statusOptions}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <RadioGroup
              control={control}
              label={formatMessage({ id: 'game.visibility' })}
              name="visibility"
              options={visibilityOptions}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <DatePicker
              control={control}
              label={formatMessage({ id: 'game.premiere' })}
              name="premiere"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Slider
              control={control}
              defaultValue={[2, 4]}
              getAriaLabel={handleAriaLabel}
              label={formatMessage({ id: 'game.players-label' })}
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
              label={formatMessage({ id: 'game.time' })}
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
              label={formatMessage({ id: 'game.age' })}
              max={120}
              min={1}
              name="age"
              size="medium"
              step={1}
              valueLabelDisplay="auto"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Rating control={control} max={10} name="rate" size="large" />
            <Rating
              control={control}
              label={formatMessage({ id: 'game.rate.workamanship' })}
              max={10}
              name="climate"
              size="large"
            />
            <Rating
              control={control}
              label={formatMessage({ id: 'game.rate.climate' })}
              max={10}
              name="workamanship"
              size="large"
            />
            <Rating
              control={control}
              label={formatMessage({ id: 'game.rate.gameplay' })}
              max={10}
              name="gameplay"
              size="large"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Favorite
              control={control}
              label={formatMessage(
                {
                  id: 'common.favorite',
                },
                { kind: 'she' }
              )}
              name="favorite"
            />
          </Grid>
        </Grid>
        <button type="submit">add</button>
      </Form>
    </Paper>
  );
};

export default CreateGame;
