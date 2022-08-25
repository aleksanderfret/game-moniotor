import 'react-router-dom';

declare module 'react-router-dom' {
  interface TypedLocation<T> extends Omit<Location, 'state'> {
    state: T;
  }

  export function useLocation<T>(): TypedLocation<T>;
}
