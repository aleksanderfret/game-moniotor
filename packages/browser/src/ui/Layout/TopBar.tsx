import React, { FC } from 'react';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { FormattedMessage } from 'react-intl';

import { MINI_SIDEBAR_WIDTH, SIDEBAR_WIDTH } from 'config/constants';

const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(1.5),
}));

interface BarProps extends AppBarProps {
  expanded: 0 | 1;
  open: boolean;
}

const Bar = styled(AppBar)<BarProps>(({ expanded, open, theme }) => ({
  [theme.breakpoints.up('md')]: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexShrink: 0,
    marginLeft: open ? `${expanded ? SIDEBAR_WIDTH : MINI_SIDEBAR_WIDTH}px` : 0,
    width: open
      ? `calc(100% - ${expanded ? SIDEBAR_WIDTH : MINI_SIDEBAR_WIDTH}px)`
      : '100%',
  },
}));

interface TopBarProps extends AppBarProps {
  expanded: boolean;
  open: boolean;
  onClick: () => void;
}

const TopBar: FC<TopBarProps> = ({ expanded, onClick, open, ...props }) => {
  return (
    <>
      <Bar expanded={expanded ? 1 : 0} open={open} position="fixed" {...props}>
        <Toolbar>
          <MenuButton
            aria-label="open navigation"
            color="inherit"
            edge="start"
            onClick={onClick}
          >
            <MenuIcon />
          </MenuButton>
          <Typography component="div" noWrap variant="h5">
            <FormattedMessage id="app-name" />
          </Typography>
        </Toolbar>
      </Bar>
    </>
  );
};

export default TopBar;
