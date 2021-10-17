import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Loader from 'ui/Loader';
import useConfirmSignUp, { ConfirmSignUpPayload } from './useConfirmSignUp';

const SignUpConfirmation: FC = () => {
  const { tokenId } = useParams<ConfirmSignUpPayload>();
  const {
    mutate: confirmSignUp,
    isError,
    isLoading,
    isSuccess
  } = useConfirmSignUp();

  useEffect(() => {
    confirmSignUp({ tokenId });
  }, [confirmSignUp, tokenId]);

  return (
    <div>
      {isLoading && <Loader size="big" />}
      {isSuccess && <FormattedMessage id="sign-up.confirmation.success" />}
      {isError && (
        <div>
          <FormattedMessage id="error.general" />
        </div>
      )}
    </div>
  );
};

export default SignUpConfirmation;
