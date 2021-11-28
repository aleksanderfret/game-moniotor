import { gql, MutationHookOptions, useMutation } from '@apollo/client';

type ForgotPasswordResponse = boolean;

interface ForgotPasswordArgs {
  email: string;
}

const FORGOT_PASSWORD = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

export function useForgotPasswordMutation(
  baseOptions?: MutationHookOptions<ForgotPasswordResponse, ForgotPasswordArgs>
) {
  const options = { ...baseOptions };

  return useMutation<ForgotPasswordResponse, ForgotPasswordArgs>(
    FORGOT_PASSWORD,
    options
  );
}
