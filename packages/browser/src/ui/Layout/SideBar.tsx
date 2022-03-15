import React, { FC } from 'react';
import IconButton from '@mui/material/IconButton';
import Box, { BoxProps } from '@mui/material/Box';
import { SvgIconProps } from '@mui/material/SvgIcon';
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import { styled, useTheme } from '@mui/material/styles';
import MenuOpenRounded from '@mui/icons-material/MenuOpenRounded';

import { MINI_SIDEBAR_WIDTH, SIDEBAR_WIDTH } from 'config/constants';
import Logo, { LogoOffset } from 'ui/Logo';
import Navigation from './Navigation';

const CloseButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

interface StyledBoxProps extends BoxProps {
  expanded: 0 | 1;
}

const NavHeader = styled(Box)<StyledBoxProps>(({ expanded, theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: expanded ? 'space-between' : 'center',
  padding: expanded ? theme.spacing(0, 1) : 0,
  ...theme.mixins.toolbar,

  [theme.breakpoints.up('md')]: {
    margin: '0 auto',
  },

  '& > div': {
    display: expanded ? 'inline-block' : 'none',

    [theme.breakpoints.up('md')]: {
      display: 'inline-block',
    },
  },
}));

const ExpandIconBox = styled(Box)<StyledBoxProps>(({ expanded, theme }) => ({
  padding: expanded ? theme.spacing(0.5, 1) : theme.spacing(0.5, 0),
  marginTop: 'auto',
  display: 'flex',
  justifyContent: expanded ? 'flex-end' : 'center',
}));

interface ExpandIconProps extends SvgIconProps {
  expanded: 0 | 1;
}

const ExpandIcon = styled(MenuOpenRounded)<ExpandIconProps>(
  ({ theme, expanded }) => ({
    transform: expanded ? 'rotate(0)' : 'rotate(180deg)',
    transition: theme.transitions.create(['transform'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
  })
);

interface MuiDrawerProps extends DrawerProps {
  expanded: 0 | 1;
  open: boolean;
}

const Drawer = styled(MuiDrawer)<MuiDrawerProps>(
  ({ expanded, open, theme }) => ({
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      marginLeft: open ? 0 : expanded ? -SIDEBAR_WIDTH : -MINI_SIDEBAR_WIDTH,
    },

    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      overflow: 'hidden',
      width: expanded ? SIDEBAR_WIDTH : MINI_SIDEBAR_WIDTH,
      transition: `${theme.transitions.create(
        ['transform', 'width', 'margin'],
        {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }
      )} !important`,
    },
  })
);

interface SideBarProps extends DrawerProps {
  expanded: boolean;
  open: boolean;
  onClose: () => void;
  onExpand: () => void;
}

const SideBar: FC<SideBarProps> = ({
  expanded,
  onClose,
  onExpand,
  open,
  variant,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Drawer
      ModalProps={{
        keepMounted: true,
      }}
      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
      expanded={expanded ? 1 : 0}
      onClose={onClose}
      open={open}
      variant={variant}
      {...props}
    >
      <>
        <NavHeader expanded={expanded ? 1 : 0}>
          <Logo offset={LogoOffset.NONE} size="tiny" variant="simple" />
          <CloseButton onClick={onClose}>
            <ChevronLeft />
          </CloseButton>
        </NavHeader>
        <Navigation showLabels={expanded} />
        <ExpandIconBox expanded={expanded ? 1 : 0}>
          <IconButton onClick={onExpand}>
            <ExpandIcon expanded={expanded ? 1 : 0} />
          </IconButton>
        </ExpandIconBox>
      </>
    </Drawer>
  );
};

export default SideBar;
