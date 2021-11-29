import { MutationHookOptions, useMutation } from '@apollo/client';

import SIGN_UP from './signUp.graphql';

type SignUpResponse = boolean;

interface SignUpArgs {
  email: string;
  password: string;
  passwordConfirmation: string;
  policy: string;
}

export function useSignUpMutation(
  baseOptions?: MutationHookOptions<SignUpResponse, SignUpArgs>
) {
  const options = { ...baseOptions };

  return useMutation<SignUpResponse, SignUpArgs>(SIGN_UP, options);
}
