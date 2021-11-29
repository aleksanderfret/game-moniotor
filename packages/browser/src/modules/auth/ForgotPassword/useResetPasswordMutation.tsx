import { MutationHookOptions, useMutation } from '@apollo/client';

import RESET_PASSWORD from './resetPassword.graphql';

type ResetPasswordResponse = boolean;

interface ResetPasswordArgs {
  email: string;
  password: string;
  passwordConfirmation: string;
  tokenId: string | undefined;
}

export function useResetPasswordMutation(
  baseOptions?: MutationHookOptions<ResetPasswordResponse, ResetPasswordArgs>
) {
  const options = { ...baseOptions };

  return useMutation<ResetPasswordResponse, ResetPasswordArgs>(
    RESET_PASSWORD,
    options
  );
}
