type Keys<T extends {}> = (keyof T)[];

const keys = <T extends {}>(obj: T): Keys<T> => Object.keys(obj) as Keys<T>;

export default keys;
