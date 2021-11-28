import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { useRemoveAccountConfirmationMutation } from './useRemoveAccountConfirmationMutation';
import { setAccessToken } from 'modules/auth/token';
import { useAppDispatch } from 'hooks';
import { setIsAuthenticated } from 'context';
import Loader from 'ui/Loader';

interface RouteParams {
  tokenId: string;
}

const RemoveAccountConfirmation: FC = () => {
  const { tokenId } = useParams<keyof RouteParams>();
  const dispatch = useAppDispatch();

  const [removeAccountConfirmation, { data, error, loading, client }] =
    useRemoveAccountConfirmationMutation();

  useEffect(() => {
    const handleConfirmRemoval = async () => {
      await removeAccountConfirmation({ variables: { tokenId } });

      setAccessToken();

      await client.clearStore();

      dispatch(setIsAuthenticated(false));
    };

    handleConfirmRemoval();
  }, [client, dispatch, removeAccountConfirmation, tokenId]);

  const success = data && !loading && !error;

  return (
    <div>
      {loading && <Loader size="big" />}
      {success && <FormattedMessage id="remove-account.success" />}
      {error && (
        <div>
          <FormattedMessage id="error.general" />
        </div>
      )}
    </div>
  );
};

export default RemoveAccountConfirmation;
