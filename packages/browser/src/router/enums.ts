enum Path {
  Account = '/account',
  Dashboard = '/dashboard',
  Events = '/events/:eventId',
  ForgotPassword = '/forgot-password',
  Games = '/games/:gameId',
  Home = '/',
  Plays = '/plays/:playId',
  Players = '/players/:playerId',
  RemoveAccountConfirmation = '/remove-account-confirmation/:tokenId',
  ResetPassword = '/reset-password/:tokenId',
  Settings = '/settings',
  SignIn = '/sign-in',
  SignUp = '/sign-up',
  SignUpConfirmation = '/sign-up-confirmation/:tokenId',
  Tools = '/tools',
  UpdatePassword = '/update-password/:tokenId'
}

export enum RouteAccess {
  Public = 'public',
  Private = 'private',
  All = 'all'
}

export default Path;
