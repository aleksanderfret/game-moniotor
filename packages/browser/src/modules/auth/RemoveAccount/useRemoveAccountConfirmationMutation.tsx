import { MutationHookOptions, useMutation } from '@apollo/client';

import REMOVE_ACCOUNT_CONFIRMATION from './removeAccountConfirmation.graphql';

type RemoveAccountConfirmationResponse = boolean;

interface RemoveAccountConfirmationArgs {
  tokenId: string | undefined;
}
export function useRemoveAccountConfirmationMutation(
  baseOptions?: MutationHookOptions<
    RemoveAccountConfirmationResponse,
    RemoveAccountConfirmationArgs
  >
) {
  const options = { ...baseOptions };

  return useMutation<
    RemoveAccountConfirmationResponse,
    RemoveAccountConfirmationArgs
  >(REMOVE_ACCOUNT_CONFIRMATION, options);
}
