import { MutationHookOptions, useMutation } from '@apollo/client';

import CONFIRM_SIGN_UP from './signUpConfirmation.graphql';

type SignUpConfirmationResponse = boolean;

export interface SignUpConfirmationArgs {
  tokenId: string;
}

export function useSignUpConfirmationMutation(
  baseOptions?: MutationHookOptions<
    SignUpConfirmationResponse,
    SignUpConfirmationArgs
  >
) {
  const options = { ...baseOptions };

  return useMutation<SignUpConfirmationResponse, SignUpConfirmationArgs>(
    CONFIRM_SIGN_UP,
    options
  );
}
