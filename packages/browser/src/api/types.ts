import { AxiosError, AxiosResponse } from 'axios';

export interface ApiPayload {
  [key: string]: any;
}

export interface ApiErrorMessage {
  valid: string;
}

export type ApiValidationErrorMessages<T> = Record<keyof T, string>;
export interface ApiErrorData<T = unknown> {
  message?: string;
  messages?: ApiValidationErrorMessages<T>;
}

export interface ErrorResponse<T = unknown, D = any>
  extends Omit<AxiosResponse<T, D>, 'data'> {
  data: ApiErrorData<T>;
}

export interface ApiError<T = unknown, D = any>
  extends Omit<AxiosError<T, D>, 'response'> {
  response?: ErrorResponse<T, D>;
}
