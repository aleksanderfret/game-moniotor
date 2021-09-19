enum Path {
  Account = '/account',
  Dashboard = '/dashboard',
  Events = '/events/:eventId',
  Games = '/games/:gameId',
  Home = '/',
  Plays = '/plays/:playId',
  Players = '/players/:playerId',
  RemoveAccountConfirmation = '/remove-account-confirmation/:tokenId',
  ResetPassword = '/reset-password',
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
