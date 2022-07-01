export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

function entries<T>(obj: T): Entries<T> {
  return Object.entries(obj) as any;
}

export default entries;
