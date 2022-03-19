import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { FormattedMessage } from 'react-intl';

import { Path } from 'router';
import {
  EventsIcon,
  GamesIcon,
  HomeIcon,
  PlaysIcon,
  ToolsIcon,
} from 'ui/Icons';

const SidebarLink = styled(NavLink)(({ theme }) => ({
  '&.MuiListItemButton-root': {
    color: theme.palette.primary.main,
    fontWeight: theme.font.weight.regular,
    boxSizing: 'border-box',
    height: theme.utils.size(3),

    '&::after': {
      width: theme.utils.size(0.25),
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      /* stylelint-disable */
      content: '""',
      /* stylelint-enable */
      transition: theme.transitions.create(['width', 'margin-left'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard,
      }),
      backgroundColor: theme.palette.secondary.main,
      marginLeft: `-${theme.utils.size(0.25)}`,
    },

    '&:hover': {
      backgroundColor: theme.utils.alpha(theme.palette.secondary.main, 20),
    },

    '& .MuiListItemIcon-root': {
      minWidth: `calc(${theme.spacing(2.5)} - 1px)`,
    },

    '& .MuiSvgIcon-root': {
      stroke: theme.palette.primary.main,
      ...theme.utils.constSize('24px'),
    },

    '&.active': {
      fontWeight: 'bold',

      '& .MuiSvgIcon-root path': {
        strokeWidth: '1.2',
      },

      '&::after': {
        marginLeft: 0,
      },
    },

    '& .MuiBottomNavigationAction-label': {
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.font.size.tiny,
      },
    },
  },
}));

interface NavigationProps {
  showLabels: boolean;
}

const Navigation: FC<NavigationProps> = ({ showLabels }) => (
  <Box component="nav">
    <List>
      <ListItemButton component={SidebarLink} to={Path.Home}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        {showLabels && (
          <ListItemText
            disableTypography
            primary={<FormattedMessage id="navigation.home" />}
          />
        )}
      </ListItemButton>
      <ListItemButton component={SidebarLink} to={Path.Games}>
        <ListItemIcon>
          <GamesIcon />
        </ListItemIcon>
        {showLabels && (
          <ListItemText
            disableTypography
            primary={<FormattedMessage id="navigation.games" />}
          />
        )}
      </ListItemButton>
      <ListItemButton component={SidebarLink} to={Path.Plays}>
        <ListItemIcon>
          <PlaysIcon />
        </ListItemIcon>
        {showLabels && (
          <ListItemText
            disableTypography
            primary={<FormattedMessage id="navigation.plays" />}
          />
        )}
      </ListItemButton>
      <ListItemButton component={SidebarLink} to={Path.Events}>
        <ListItemIcon>
          <EventsIcon />
        </ListItemIcon>
        {showLabels && (
          <ListItemText
            disableTypography
            primary={<FormattedMessage id="navigation.events" />}
          />
        )}
      </ListItemButton>
      <ListItemButton component={SidebarLink} to={Path.Tools}>
        <ListItemIcon>
          <ToolsIcon />
        </ListItemIcon>
        {showLabels && (
          <ListItemText
            disableTypography
            primary={<FormattedMessage id="navigation.tools" />}
          />
        )}
      </ListItemButton>
    </List>
  </Box>
);

export default Navigation;
