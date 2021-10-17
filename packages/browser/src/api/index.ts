import axios, {
  ApiPromise,
  AxiosRequestConfig,
  AxiosResponse,
  Method
} from 'axios';

import environment from 'env';
import { ApiError, ApiPayload } from './types';

const { API_URL } = environment;

const onFulfilled = (response: AxiosResponse<unknown, any>) => response;
const onRejected = (error: ApiError): Promise<ApiError> => {
  if (error.response && !error.response.data) {
    error.response.data = { message: 'error.general' };
  }

  return Promise.reject(error);
};

axios.interceptors.response.use(onFulfilled, onRejected);

export const api =
  (method: Method) =>
  (baseUrl: string) =>
  <T>(
    url: string,
    payload?: ApiPayload,
    config?: AxiosRequestConfig
  ): ApiPromise<T> => {
    const { CancelToken } = axios;

    const source = CancelToken.source();

    const promise = axios({
      cancelToken: source.token,
      data: payload,
      headers: {
        'Content-Type': 'application/json'
      },
      method,
      url: `${baseUrl}${url}`,
      withCredentials: true,
      ...config
    });

    promise.cancel = () => {
      source.cancel('Request canceled');
    };

    return promise;
  };

export const postData = api('POST')(API_URL);
export const getData = api('GET')(API_URL);
export const putData = api('PUT')(API_URL);
export const patchData = api('PATCH')(API_URL);
export const deleteData = api('DELETE')(API_URL);
