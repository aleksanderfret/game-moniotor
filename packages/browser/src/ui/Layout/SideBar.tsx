import React, { FC } from 'react';
import IconButton from '@mui/material/IconButton';
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import { styled, useTheme } from '@mui/material/styles';

import { DRAWER_WIDTH } from 'config/constants';
import Logo from 'ui/Logo';
import Navigation from './Navigation';

const CloseButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const NavHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface MuiDrawerProps extends DrawerProps {
  open: boolean;
}

const Drawer = styled(MuiDrawer)<MuiDrawerProps>(({ open, theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: open ? 'block' : 'none',
    marginLeft: open ? 0 : -DRAWER_WIDTH,
  },

  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: DRAWER_WIDTH,
  },
}));

interface SideBarProps extends DrawerProps {
  open: boolean;
  onClose: () => void;
}

const SideBar: FC<SideBarProps> = ({ onClose, open, variant, ...props }) => {
  const theme = useTheme();

  return (
    <Drawer
      ModalProps={{
        keepMounted: true,
      }}
      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
      onClose={onClose}
      open={open}
      variant={variant}
      {...props}
    >
      <>
        <NavHeader>
          <Logo gap={false} size="tiny" variant="mixed" />
          <CloseButton onClick={onClose}>
            <ChevronLeft />
          </CloseButton>
        </NavHeader>
        <Navigation />
      </>
    </Drawer>
  );
};

export default SideBar;
