import { MutationHookOptions, useMutation } from '@apollo/client';

import { setAccessToken } from 'modules/auth/token';
import CHANGE_PASSWORD from './changePassword.graphql';

type ChangePasswordResponse = {
  changePassword: {
    accessToken: string;
  };
};

interface ChangePasswordArgs {
  email: string;
  oldPassword: string;
  password: string;
  passwordConfirmation: string;
}

export function useChangePasswordMutation(
  baseOptions?: MutationHookOptions<ChangePasswordResponse, ChangePasswordArgs>
) {
  const options = { ...baseOptions };

  return useMutation<ChangePasswordResponse, ChangePasswordArgs>(
    CHANGE_PASSWORD,
    {
      onCompleted: data => {
        setAccessToken(data.changePassword.accessToken);
      },
      ...options
    }
  );
}
