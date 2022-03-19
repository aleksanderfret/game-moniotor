import Path from './enums';
import Route, {
  AccountRoute,
  EventRoute,
  EventsRoute,
  ForgotPasswordRoute,
  GameRoute,
  GamesRoute,
  HomeRoute,
  NewGameRoute,
  NoParams,
  PlayerRoute,
  PlayersRoute,
  PlayRoute,
  PlaysRoute,
  RemoveAccountConfirmationRoute,
  ResetPasswordRoute,
  SettingsRoute,
  SignInRoute,
  SignUpConfirmationRoute,
  SignUpRoute,
  ToolRoute,
  ToolsRoute,
} from './types';

const createPath = <T extends Route>(path: T[0]) => {
  return (params: T[1]) => {
    if (!params) {
      return path;
    }

    return Object.entries(params as Exclude<T[1], NoParams>).reduce(
      (previousValue: string, [param, value]) =>
        previousValue.replace(`:${param}`, '' + value),
      path
    );
  };
};

export const createAccountPath = createPath<AccountRoute>(Path.Account);
export const createEventsPath = createPath<EventsRoute>(Path.Events);
export const createEventPath = createPath<EventRoute>(Path.Event);
export const createForgotPath = createPath<ForgotPasswordRoute>(
  Path.ForgotPassword
);
export const createHomePath = createPath<HomeRoute>(Path.Home);
export const createGamesPath = createPath<GamesRoute>(Path.Games);
export const createGamePath = createPath<GameRoute>(Path.Game);
export const createNewGamePath = createPath<NewGameRoute>(Path.NewGame);
export const createPlayersPath = createPath<PlayersRoute>(Path.Players);
export const createPlayerPath = createPath<PlayerRoute>(Path.Player);
export const createPlaysPath = createPath<PlaysRoute>(Path.Plays);
export const createPlayPath = createPath<PlayRoute>(Path.Play);
export const createRemoveAccountConfirmationPath =
  createPath<RemoveAccountConfirmationRoute>(Path.RemoveAccountConfirmation);
export const createResetPasswordPath = createPath<ResetPasswordRoute>(
  Path.ResetPassword
);
export const createSettingsPath = createPath<SettingsRoute>(Path.Settings);
export const createSignInPath = createPath<SignInRoute>(Path.SignIn);
export const createSignUpConfirmationPath = createPath<SignUpConfirmationRoute>(
  Path.SignUpConfirmation
);
export const createSignUpPath = createPath<SignUpRoute>(Path.SignUp);

export const createToolsPath = createPath<ToolsRoute>(Path.Tools);
export const createToolPath = createPath<ToolRoute>(Path.Tool);
