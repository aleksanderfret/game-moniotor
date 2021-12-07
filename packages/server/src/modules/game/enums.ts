import registerEnumTypes from 'utils/registerEnumTypes';

export enum GameType {
  BaseGame = 'BaseGame',
  Expansion = 'Expansion',
  MiniExpansion = 'MiniExpansion'
}

registerEnumTypes([[GameType, 'GameType']]);
