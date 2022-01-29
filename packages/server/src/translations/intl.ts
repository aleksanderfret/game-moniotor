import { createIntl, createIntlCache, IntlShape } from 'react-intl';

import { Locale } from 'types/types';
import locales from '.';

const cache = createIntlCache();

let translator: IntlShape;

const getIntl = (locale: Locale) => {
  if (!translator) {
    translator = createIntl(
      {
        defaultLocale: 'en',
        locale: locale,
        messages: { ...locales[locale] },
      },
      cache
    );
  }

  translator.locale = locale;
  translator.messages = { ...locales[locale] };

  return translator;
};

export const getFormatDate = (locale: Locale) => getIntl(locale).formatDate;
export const getFormatMessage = (locale: Locale) =>
  getIntl(locale).formatMessage;
export const getFormatNumber = (locale: Locale) => getIntl(locale).formatNumber;
export const getFormatTime = (locale: Locale) => getIntl(locale).formatTime;

export default getIntl;
