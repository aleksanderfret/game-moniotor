import { QueryHookOptions, useQuery } from '@apollo/client';

import { User } from 'modules/user/types';
import CURRENT_USER from './currentUser.graphql';

export type CurrentUserResponse = { currentUser: User };

type CurrentUserArgs = {};

function useCurrentUserQuery(
  baseOptions?: QueryHookOptions<CurrentUserResponse, CurrentUserArgs>
) {
  const options = { ...baseOptions };

  return useQuery<CurrentUserResponse, CurrentUserArgs>(CURRENT_USER, options);
}

export { CURRENT_USER, useCurrentUserQuery };
