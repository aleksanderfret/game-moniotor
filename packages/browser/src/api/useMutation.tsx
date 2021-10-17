import {
  MutationFunction,
  useMutation as RCuseMutation,
  UseMutationOptions,
  UseMutationResult
} from 'react-query';

import { ApiError } from 'api/types';

const useErrorBoundary = (error: ApiError) => {
  const { response } = error;
  const { status } = response || {};

  return status ? status >= 500 : false;
};

function useMutation<TData = unknown, TVariables = void, TContext = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?:
    | Omit<
        UseMutationOptions<TData, ApiError<TVariables>, TVariables, TContext>,
        'mutationFn'
      >
    | undefined
): UseMutationResult<TData, ApiError<TVariables>, TVariables, TContext> {
  return RCuseMutation<TData, ApiError<TVariables>, TVariables, TContext>(
    mutationFn,
    {
      useErrorBoundary,
      ...options
    }
  );
}

export default useMutation;
