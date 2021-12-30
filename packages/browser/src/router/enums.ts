enum Path {
  Account = '/account',
  Dashboard = '/dashboard',
  Events = '/events',
  Event = '/events/:eventId',
  ForgotPassword = '/forgot-password',
  Games = '/games',
  Game = '/games/:gameId',
  Home = '/',
  Plays = '/plays',
  Play = '/plays/:playId',
  Players = '/players',
  Player = '/players/:playerId',
  RemoveAccountConfirmation = '/remove-account-confirmation/:tokenId',
  ResetPassword = '/reset-password/:tokenId',
  Settings = '/settings',
  SignIn = '/sign-in',
  SignUp = '/sign-up',
  SignUpConfirmation = '/sign-up-confirmation/:tokenId',
  Tools = '/tools',
  Tool = '/tool/:toolId',
  UpdatePassword = '/update-password/:tokenId'
}

export enum RouteAccess {
  Public = 'public',
  Private = 'private',
  All = 'all'
}

export default Path;
