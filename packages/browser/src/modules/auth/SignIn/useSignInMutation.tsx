import { MutationHookOptions, useMutation } from '@apollo/client';

import { User } from 'modules/user/types';
import {
  CURRENT_USER,
  CurrentUserResponse,
} from 'modules/user/CurrentUser/useCurrentUserQuery';
import SIGN_IN from './signIn.graphql';

type SignInResponse = {
  signIn: {
    user: User;
    accessToken: string;
  };
};

interface SignInArgs {
  email: string;
  password: string;
}

export function useSignInMutation(
  baseOptions?: MutationHookOptions<SignInResponse, SignInArgs>
) {
  const options = { ...baseOptions };

  return useMutation<SignInResponse, SignInArgs>(SIGN_IN, {
    update: (cache, { data }) => {
      if (!data) {
        return null;
      }
      cache.writeQuery<CurrentUserResponse>({
        data: { currentUser: data.signIn.user },
        query: CURRENT_USER,
      });
    },
    ...options,
  });
}
