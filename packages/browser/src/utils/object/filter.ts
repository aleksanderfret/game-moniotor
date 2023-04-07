import entries from './entries';

export const filterObject =
  (callback: (v: any) => boolean) =>
  <T extends {}>(object: T) =>
    entries(object).reduce(
      (newObject, [key, value]) =>
        callback(value) ? { ...newObject, [key]: value } : newObject,
      {} as T
    );

const checkIfNotUndefined = (v: any) => v !== undefined;
const checkIfNotNull = (v: any) => v !== null;
const checkIfNotNullish = (v: any) => v !== undefined || v !== null;

export const filterNull = filterObject(checkIfNotNull);
export const filterUndefined = filterObject(checkIfNotUndefined);
export const filterNullish = filterObject(checkIfNotNullish);
