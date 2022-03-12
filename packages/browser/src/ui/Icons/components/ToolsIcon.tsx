import React from 'react';

import Icon, { SvgIcon } from './Icon';

const ToolsIcon: SvgIcon = props => (
  <Icon {...props}>
    <path d="M4 13H12H20V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18V13Z" />
    <path d="M20 13L18.6465 8.43182C18.3948 7.58258 17.6146 7 16.7289 7H7.27113C6.3854 7 5.60516 7.58259 5.35353 8.43183L4 13" />
    <path d="M8 11V15" />
    <path d="M16 11V15" />
    <path d="M8 7V6C8 4.89543 8.89543 4 10 4H14C15.1046 4 16 4.89543 16 6V7" />
  </Icon>
);

export default ToolsIcon;
