import useMutation from 'api/useMutation';
import { postData } from 'api';

export interface ConfirmSignUpPayload {
  tokenId: string;
}
const confirmSignUp = (data: ConfirmSignUpPayload) =>
  postData<void>('/auth/confirm-sign-up', data);

const useConfirmSignUp = () => useMutation(confirmSignUp);

export default useConfirmSignUp;
