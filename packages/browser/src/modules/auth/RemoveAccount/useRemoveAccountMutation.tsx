import { MutationHookOptions, useMutation } from '@apollo/client';

import REMOVE_ACCOUNT from './removeAccount.graphql';

type RemoveAccountResponse = boolean;

type RemoveAccountArgs = {
  email: string;
  password: string;
};

export function useRemoveAccountMutation(
  baseOptions?: MutationHookOptions<RemoveAccountResponse, RemoveAccountArgs>
) {
  const options = { ...baseOptions };

  return useMutation<RemoveAccountResponse, RemoveAccountArgs>(
    REMOVE_ACCOUNT,
    options
  );
}
