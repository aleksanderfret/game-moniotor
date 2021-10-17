import 'axios';

declare module 'axios' {
  export interface ApiPromise<T> extends Promise<AxiosResponse<T>> {
    cancel: () => void;
  }

  export interface AxiosInstance extends Axios {
    (config: AxiosRequestConfig): ApiPromise;
    (url: string, config?: AxiosRequestConfig): ApiPromise;
  }
}
