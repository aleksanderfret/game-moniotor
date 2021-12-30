import Path from './enums';

export type NoParams = undefined | void;
export type AccountRoute = [Path.Account, NoParams];
export type DashboardRoute = [Path.Dashboard, NoParams];
export type EventsRoute = [Path.Events, NoParams];
export type EventRoute = [Path.Event, { eventId: string }];
export type ForgotPasswordRoute = [Path.ForgotPassword, NoParams];
export type GamesRoute = [Path.Games, NoParams];
export type GameRoute = [Path.Game, { gameId: string }];
export type HomeRoute = [Path.Home, NoParams];
export type PlayersRoute = [Path.Players, NoParams];
export type PlayerRoute = [Path.Player, { playerId: string }];
export type PlaysRoute = [Path.Plays, NoParams];
export type PlayRoute = [Path.Play, { playId: string }];
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
export type ToolRoute = [Path.Tool, { toolId: string }];

type Route =
  | AccountRoute
  | DashboardRoute
  | EventRoute
  | EventsRoute
  | ForgotPasswordRoute
  | GameRoute
  | GamesRoute
  | HomeRoute
  | PlayersRoute
  | PlayerRoute
  | PlaysRoute
  | PlayRoute
  | RemoveAccountConfirmationRoute
  | ResetPasswordRoute
  | SettingsRoute
  | SignInRoute
  | SignUpConfirmationRoute
  | SignUpRoute
  | ToolsRoute
  | ToolRoute;

export default Route;
