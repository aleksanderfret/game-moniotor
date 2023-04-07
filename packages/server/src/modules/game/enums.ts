import registerEnumTypes from 'utils/registerEnumTypes';

export enum GameType {
  BaseGame = 'BaseGame',
  Expansion = 'Expansion',
  MiniExpansion = 'MiniExpansion',
}

export enum Visibility {
  Public = 'public',
  Private = 'private',
  Limited = 'limited',
  Visible = 'visible',
}

export enum OwnStatus {
  Lent = 'lent',
  Owned = 'owned',
  Ordered = 'ordered',
  Founded = 'founded',
  WishList = 'wishlist',
}

registerEnumTypes([
  [GameType, 'GameType'],
  [Visibility, 'Visibility'],
  [OwnStatus, 'OwnStatus'],
]);
