import React from 'react';
import ReactDOM from 'react-dom';
import 'ts-polyfill';

import App from 'app/App';
import { polyfillIntl } from 'translations';

import './scss/index.scss';

polyfillIntl();

ReactDOM.render(<App />, document.getElementById('root'));
