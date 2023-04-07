import React from 'react';

import Icon, { SvgIcon } from './Icon';

const RadioCheckedIcon: SvgIcon = props => (
  <Icon filled {...props}>
    <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" />
    <path
      clipRule="evenodd"
      d="M22 12C22 17.5228 17.5229 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5229 2 22 6.47715 22 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02943 21 3 16.9706 3 12C3 7.02943 7.02943 3 12 3C16.9706 3 21 7.02943 21 12Z"
      fillRule="evenodd"
    />
  </Icon>
);

export default RadioCheckedIcon;
