import Path from './enums';

export type NoParams = undefined | void;
export type AccountRoute = [Path.Account, NoParams];
export type DashboardRoute = [Path.Dashboard, NoParams];
export type EventsRoute = [Path.Events, { eventId: string }];
export type ForgotPasswordRoute = [Path.ForgotPassword, NoParams];
export type GamesRoute = [Path.Games, { gameId: string }];
export type HomeRoute = [Path.Home, NoParams];
export type PlayersRoute = [Path.Players, { playerId: string }];
export type PlaysRoute = [Path.Plays, { playId: string }];
export type RemoveAccountConfirmationRoute = [
  Path.RemoveAccountConfirmation,
  { tokenId: string }
];
export type ResetPasswordRoute = [Path.ResetPassword, { tokenId: string }];
export type SettingsRoute = [Path.Settings, NoParams];
export type SignInRoute = [Path.SignIn, NoParams];
export type SignUpRoute = [Path.SignUp, NoParams];
export type SignUpConfirmationRoute = [
  Path.SignUpConfirmation,
  { tokenId: string }
];
export type ToolsRoute = [Path.Tools, NoParams];

type Route =
  | AccountRoute
  | DashboardRoute
  | EventsRoute
  | ForgotPasswordRoute
  | GamesRoute
  | HomeRoute
  | PlayersRoute
  | PlaysRoute
  | RemoveAccountConfirmationRoute
  | ResetPasswordRoute
  | SettingsRoute
  | SignInRoute
  | SignUpConfirmationRoute
  | SignUpRoute
  | ToolsRoute;

export default Route;
