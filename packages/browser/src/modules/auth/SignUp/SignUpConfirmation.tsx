import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Loader from 'ui/Loader';
import {
  SignUpConfirmationArgs,
  useSignUpConfirmationMutation,
} from './useSignUpConfirmationMutation';

const SignUpConfirmation: FC = () => {
  const { tokenId } = useParams<keyof SignUpConfirmationArgs>();
  const [confirmSignUp, { error, loading }] = useSignUpConfirmationMutation();

  useEffect(() => {
    if (tokenId) {
      confirmSignUp({ variables: { tokenId } });
    }
  }, [confirmSignUp, tokenId]);

  const success = !loading && !error;

  return (
    <div>
      {loading && <Loader size="big" />}
      {success && <FormattedMessage id="sign-up.confirmation.success" />}
      {error && (
        <div>
          <FormattedMessage id="error.general" />
        </div>
      )}
    </div>
  );
};

export default SignUpConfirmation;
