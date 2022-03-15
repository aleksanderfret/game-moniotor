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
  const [expanded, setExpanded] = useState(true);

  const handleNavigationExpand = () => {
    setExpanded(previousIsExpanded => !previousIsExpanded);
  };

  const handleNavigationToggle = () => {
    setIsOpen(previousIsOpen => !previousIsOpen);
  };

  const handleNavigationOpen = () => {
    setIsOpen(true);
  };

  const handleNavigationClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <TopBar
        expanded={expanded}
        onClick={isMediumScreen ? handleNavigationToggle : handleNavigationOpen}
        open={isOpen}
      />
      <SideBar
        expanded={expanded}
        onClose={handleNavigationClose}
        onExpand={handleNavigationExpand}
        open={isOpen}
        variant={isMediumScreen ? 'persistent' : 'temporary'}
      />
      <Content component="main" expanded={expanded ? 1 : 0} open={isOpen}>
        {children}
      </Content>
    </>
  );
};

export default Layout;
