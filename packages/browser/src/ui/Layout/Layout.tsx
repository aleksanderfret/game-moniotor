import React, { FC, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import TopBar from './TopBar';
import SideBar from './SideBar';
import Content from './Content';

const Layout: FC = ({ children }) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
  const [isOpen, setIsOpen] = useState(isMediumScreen);

  const handleDrawerToggle = () => {
    setIsOpen(previousIsOpen => !previousIsOpen);
  };

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <TopBar
        onClick={isMediumScreen ? handleDrawerToggle : handleDrawerOpen}
        open={isOpen}
      />
      <SideBar
        onClose={handleDrawerClose}
        open={isOpen}
        variant={isMediumScreen ? 'persistent' : 'temporary'}
      />
      <Content component="main" open={isOpen}>
        {children}
      </Content>
    </>
  );
};

export default Layout;
