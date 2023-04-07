import en from 'translations/en.json';

type IntlMessageId = keyof typeof en;
declare module '@formatjs/intl-pluralrules/locale-data/en';
declare module '@formatjs/intl-pluralrules/locale-data/pl';
declare module '@formatjs/intl-relativetimeformat/locale-data/en';
declare module '@formatjs/intl-relativetimeformat/locale-data/pl';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: IntlMessageId;
    }
  }
}
