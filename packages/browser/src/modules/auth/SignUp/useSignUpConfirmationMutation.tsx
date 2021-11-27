import { gql, MutationHookOptions, useMutation } from '@apollo/client';

type SignUpConfirmationResponse = boolean;

export interface SignUpConfirmationArgs {
  tokenId: string;
}

const CONFIRM_SIGN_UP = gql`
  mutation confirmSignUp($tokenId: String!) {
    confirmSignUp(tokenId: $tokenId)
  }
`;

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
