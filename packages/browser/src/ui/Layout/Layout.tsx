import React, { FC, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import TopBar from './TopBar';
import SideBar from './SideBar';
import Content from './Content';

const Layout: FC = ({ children }) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setIsOpen] = useState<boolean | undefined>();
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

  useEffect(() => {
    if (isMediumScreen && open === undefined) {
      setIsOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMediumScreen]);

  return (
    <>
      <TopBar
        onClick={isMediumScreen ? handleNavigationToggle : handleNavigationOpen}
      />
      <SideBar
        expanded={expanded}
        onClose={handleNavigationClose}
        onExpand={handleNavigationExpand}
        open={Boolean(open)}
        variant={isMediumScreen ? 'persistent' : 'temporary'}
      />
      <Content
        component="main"
        expanded={expanded ? 1 : 0}
        open={Boolean(open)}
      >
        {children}
      </Content>
    </>
  );
};

export default Layout;
