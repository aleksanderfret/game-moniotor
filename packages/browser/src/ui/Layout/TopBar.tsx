import React, { FC } from 'react';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { FormattedMessage } from 'react-intl';

import { DRAWER_WIDTH } from 'config/constants';

const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(1.5),
}));

interface BarProps extends AppBarProps {
  open: boolean;
}

const Bar = styled(AppBar)<BarProps>(({ open, theme }) => ({
  [theme.breakpoints.up('md')]: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexShrink: 0,
    marginLeft: open ? DRAWER_WIDTH : 0,
    width: open ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%',
  },
}));

interface TopBarProps extends AppBarProps {
  open: boolean;
  onClick: () => void;
}

const TopBar: FC<TopBarProps> = ({ onClick, open, ...props }) => {
  return (
    <>
      <Bar open={open} position="fixed" {...props}>
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
