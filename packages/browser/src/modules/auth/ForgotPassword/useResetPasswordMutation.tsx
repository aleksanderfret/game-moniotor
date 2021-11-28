import { gql, MutationHookOptions, useMutation } from '@apollo/client';

type ResetPasswordResponse = boolean;

interface ResetPasswordArgs {
  email: string;
  password: string;
  passwordConfirmation: string;
  tokenId: string | undefined;
}

const RESET_PASSWORD = gql`
  mutation resetPassword(
    $tokenId: String!
    $email: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    resetPassword(
      tokenId: $tokenId
      email: $email
      password: $password
      passwordConfirmation: $passwordConfirmation
    )
  }
`;

export function useResetPasswordMutation(
  baseOptions?: MutationHookOptions<ResetPasswordResponse, ResetPasswordArgs>
) {
  const options = { ...baseOptions };

  return useMutation<ResetPasswordResponse, ResetPasswordArgs>(
    RESET_PASSWORD,
    options
  );
}
