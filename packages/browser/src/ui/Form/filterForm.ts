import { entries, isObject, values } from 'utils';
import { FormData } from './types';

const findDiff = <T>(a: T[], b: T[]) => a.filter((x: T) => !b.includes(x));

export const filterForm = <T extends FormData>(
  state: T,
  initialState: T
): Partial<T> =>
  entries(state).reduce((acc, [key, value]) => {
    const initValue = initialState[key];

    if (Array.isArray(value) && Array.isArray(initValue)) {
      const diff = findDiff(value, initValue);

      if (diff.length) {
        return { ...acc, [key]: value };
      }
    } else if (isObject(value) && isObject(initValue)) {
      const diff = findDiff(values(value), values(initValue));

      if (diff.length) {
        return { ...acc, [key]: value };
      }
    } else if (value !== initValue) {
      return { ...acc, [key]: value };
    }

    return acc;
  }, {} as Partial<T>);
