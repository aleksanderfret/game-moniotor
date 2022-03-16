import React, { FC } from 'react';
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { FormattedMessage } from 'react-intl';

const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(1.5),
}));

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexShrink: 0,
    zIndex: theme.zIndex.drawer + 1,
  },
}));

interface TopBarProps extends AppBarProps {
  onClick: () => void;
}

const TopBar: FC<TopBarProps> = ({ onClick, ...props }) => (
  <AppBar position="fixed" {...props}>
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
  </AppBar>
);

export default TopBar;
