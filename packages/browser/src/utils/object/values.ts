type Values<T extends {}> = T[keyof T][];

const values = <T extends {}>(obj: T): Values<T> =>
  Object.values(obj) as Values<T>;

export default values;
