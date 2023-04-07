import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';

import Loader from 'ui/Loader';
import { IntroView } from 'ui/View';
import {
  SignUpConfirmationArgs,
  useSignUpConfirmationMutation,
} from './useSignUpConfirmationMutation';
import { Path } from 'router';
import Feedback from 'ui/Feedback';

const SignUpConfirmation = (): JSX.Element => {
  const { formatMessage: f } = useIntl();
  const [confirmed, setConfirmed] = useState(false);
  const [token, setToken] = useState('');
  const { tokenId } = useParams<keyof SignUpConfirmationArgs>();
  const [confirmSignUp, { data, error, loading }] =
    useSignUpConfirmationMutation();

  useEffect(() => {
    if (tokenId) {
      setToken(tokenId);
    }
  }, [tokenId]);

  useEffect(() => {
    if (token && !loading && !confirmed) {
      setConfirmed(true);
      confirmSignUp({
        variables: { tokenId: token },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const link = <Link to={Path.SignIn}>{f({ id: 'sign-in' })}</Link>;

  const success = !loading && !error && data;

  return (
    <IntroView>
      <div>
        {loading && <Loader size="big" />}
        {success && f({ id: 'sign-up.confirmation.success' }, { link })}
        {error && <Feedback message={f({ id: 'error.general' })} />}
      </div>
    </IntroView>
  );
};

export default SignUpConfirmation;
