import React from 'react';

import Icon, { SvgIcon } from './Icon';

const EventsIcon: SvgIcon = props => (
  <Icon {...props}>
    <path d="M4 9L20 9" />
    <path d="M7 4L7 6" />
    <path d="M16 4L16 6" />
    <path d="M4 8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V8Z" />
    <path d="M13 14C13 13.4477 13.4477 13 14 13H15C15.5523 13 16 13.4477 16 14V15C16 15.5523 15.5523 16 15 16H14C13.4477 16 13 15.5523 13 15V14Z" />
  </Icon>
);

export default EventsIcon;
