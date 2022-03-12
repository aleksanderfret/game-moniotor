import React from 'react';

import Icon, { SvgIcon } from './Icon';

const GamesIcon: SvgIcon = props => (
  <Icon {...props}>
    <path d="M12 3L19.7942 7.5V16.5L12 21L4.20577 16.5V7.5L12 3Z" />
    <path d="M12 15.6L7.32349 8.85001L16.6766 8.85001L12 15.6Z" />
    <path d="M4.34998 7.5L7.50001 8.85L12 3L16.5 8.85L19.65 7.5" />
    <path d="M7.49999 8.85001L4.79999 16.5" />
    <path d="M16.5 8.85001L19.2 16.5" />
    <path d="M4.79999 16.5L12 15.6L19.2 16.5" />
    <path d="M12 21V15.6" />
  </Icon>
);

export default GamesIcon;
