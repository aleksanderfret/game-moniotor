import { MutationHookOptions, useMutation } from '@apollo/client';

import FORGOT_PASSWORD from './forgotPassword.graphql';

type ForgotPasswordResponse = boolean;

interface ForgotPasswordArgs {
  email: string;
}

export function useForgotPasswordMutation(
  baseOptions?: MutationHookOptions<ForgotPasswordResponse, ForgotPasswordArgs>
) {
  const options = { ...baseOptions };

  return useMutation<ForgotPasswordResponse, ForgotPasswordArgs>(
    FORGOT_PASSWORD,
    options
  );
}
