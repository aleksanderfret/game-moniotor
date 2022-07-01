import registerEnumTypes from 'utils/registerEnumTypes';

export enum RateType {
  Climate = 'climate',
  General = 'general',
  GamePlay = 'gamePlay',
  Workmanship = 'workmanship',
}

registerEnumTypes([[RateType, 'RateType']]);
