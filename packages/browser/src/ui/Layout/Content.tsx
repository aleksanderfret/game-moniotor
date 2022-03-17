import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { MINI_SIDEBAR_WIDTH, SIDEBAR_WIDTH } from 'config/constants';

interface ContentProps extends BoxProps {
  expanded: 0 | 1;
  open: boolean;
}

const Content = styled(Box)<ContentProps>(({ expanded, open, theme }) => ({
  flexGrow: 1,
  position: 'relative',
  padding: `${theme.spacing(4.5)} ${theme.spacing(1)}`,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  [theme.breakpoints.up('sm')]: {
    padding: `${theme.spacing(5.5)} ${theme.spacing(2)}`,
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(7),
    width: open
      ? `calc(100% - ${expanded ? SIDEBAR_WIDTH : MINI_SIDEBAR_WIDTH}px)`
      : '100%',
    marginLeft: open ? (expanded ? SIDEBAR_WIDTH : MINI_SIDEBAR_WIDTH) : 0,
  },
}));

export default Content;
