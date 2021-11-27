import { gql, MutationHookOptions, useMutation } from '@apollo/client';

type SignUpResponse = boolean;

interface SignUpArgs {
  email: string;
  password: string;
  passwordConfirmation: string;
  policy: string;
}

const SIGN_UP = gql`
  mutation signUp(
    $email: String!
    $password: String!
    $passwordConfirmation: String!
    $policy: String!
  ) {
    signUp(
      email: $email
      password: $password
      passwordConfirmation: $passwordConfirmation
      policy: $policy
    )
  }
`;

export function useSignUpMutation(
  baseOptions?: MutationHookOptions<SignUpResponse, SignUpArgs>
) {
  const options = { ...baseOptions };

  return useMutation<SignUpResponse, SignUpArgs>(SIGN_UP, options);
}
