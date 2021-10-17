import useMutation from 'api/useMutation';
import { postData } from 'api';

interface SignUpPayload {
  email: string;
  password: string;
  passwordConfirmation: string;
  policy: Date;
}

const signUp = (data: SignUpPayload) => postData<void>('/auth/sign-up', data);

const useSignUp = () => useMutation(signUp);

export default useSignUp;
