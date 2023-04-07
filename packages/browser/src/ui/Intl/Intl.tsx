import React, { FC } from 'react';
import { FormattedMessage, MessageDescriptor } from 'react-intl';
import type { Options } from 'intl-messageformat';

import en from 'translations/en.json';

interface Props<V extends Record<string, any> = Record<string, React.ReactNode>>
  extends MessageDescriptor {
  values?: V;
  tagName?: React.ElementType<any>;
  children?(nodes: React.ReactNode[]): React.ReactElement | null;
  ignoreTag?: Options['ignoreTag'];
}

type IntlMessageId = keyof typeof en;

interface IntlProps extends Props<Record<string, React.ReactNode>> {
  id?: IntlMessageId;
}

const Intl: FC<IntlProps> = props => <FormattedMessage {...props} />;

export default Intl;
