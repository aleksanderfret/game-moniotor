import { MutationHookOptions, useMutation } from '@apollo/client';

import SIGN_OUT from './signOut.graphql';

type SignOutResponse = boolean;

type SignOutArgs = {};
export function useSignOutMutation(
  baseOptions?: MutationHookOptions<SignOutResponse, SignOutArgs>
) {
  const options = { ...baseOptions };

  return useMutation<SignOutResponse, SignOutArgs>(SIGN_OUT, options);
}
