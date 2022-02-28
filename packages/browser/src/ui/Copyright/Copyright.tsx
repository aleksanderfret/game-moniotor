import React, { FC } from 'react';
import Box from '@mui/material/Box';

import environment from 'env';

const { COMPANY_NAME } = environment;

const Intro: FC = () => (
  <Box>{`© 2021-${new Date().getFullYear()} ${COMPANY_NAME}`}</Box>
);

export default Intro;
