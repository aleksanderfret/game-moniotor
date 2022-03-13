import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import MuiBottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import {
  EventsIcon,
  GamesIcon,
  HomeIcon,
  PlaysIcon,
  ToolsIcon,
} from 'ui/Icons';
import { Path } from 'router';

const Link = styled(NavLink)(({ theme }) => ({
  '&.MuiButtonBase-root': {
    color: theme.palette.primary.main,

    '& .MuiSvgIcon-root': {
      ...theme.utils.constSize('24px'),
    },

    '&.active': {
      fontWeight: 'bold',

      '& .MuiSvgIcon-root path': {
        strokeWidth: '1.2',
      },
    },

    '& .MuiBottomNavigationAction-label': {
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.font.size.tiny,
      },
    },
  },
}));

const StyledBottomNavigation = styled(MuiBottomNavigation)(({ theme }) => ({
  display: 'flex',
  position: 'fixed',
  width: '100%',
  bottom: 0,
  left: 0,
  backgroundColor: theme.palette.background.paper,

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },

  '& > :last-child': {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const BottomNavigation: FC = () => (
  <StyledBottomNavigation showLabels>
    <BottomNavigationAction
      component={Link}
      icon={<HomeIcon />}
      label={<FormattedMessage id="navigation.home" />}
      to={Path.Dashboard}
    />
    <BottomNavigationAction
      component={Link}
      icon={<GamesIcon />}
      label={<FormattedMessage id="navigation.games" />}
      to={Path.Games}
    />
    <BottomNavigationAction
      component={Link}
      icon={<PlaysIcon />}
      label={<FormattedMessage id="navigation.plays" />}
      to={Path.Plays}
    />
    <BottomNavigationAction
      component={Link}
      icon={<EventsIcon />}
      label={<FormattedMessage id="navigation.events" />}
      to={Path.Events}
    />
    <BottomNavigationAction
      component={Link}
      icon={<ToolsIcon />}
      label={<FormattedMessage id="navigation.tools" />}
      to={Path.Tools}
    />
  </StyledBottomNavigation>
);

export default BottomNavigation;
