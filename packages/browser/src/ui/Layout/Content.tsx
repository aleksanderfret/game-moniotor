import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { DRAWER_WIDTH } from 'config/constants';

interface ContentProps extends BoxProps {
  open: boolean;
}

const Content = styled(Box)<ContentProps>(({ open, theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(1),
  paddingTop: theme.spacing(4.5),
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(5.5),
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(7),
    width: open ? `calc(100% - ${DRAWER_WIDTH}}px)` : '100%',
    marginLeft: open ? DRAWER_WIDTH : 0,
  },
}));

export default Content;
