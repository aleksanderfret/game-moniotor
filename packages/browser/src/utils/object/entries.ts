type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

const entries = <T extends {}>(obj: T): Entries<T> =>
  Object.entries(obj) as Entries<T>;

export default entries;
