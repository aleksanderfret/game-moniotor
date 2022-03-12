import React from 'react';

import Icon, { SvgIcon } from './Icon';

const HomeIcon: SvgIcon = props => (
  <Icon {...props}>
    <path d="M3 12L12 3L21 12H19V21H14V15H10V21H5V12H3Z" />
  </Icon>
);

export default HomeIcon;
