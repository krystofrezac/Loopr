import React from 'react';

import {
  AppBar as AppBarPrefab,
  Badge,
  fade,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Theme,
  Toolbar,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LogOutIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

import { drawerWidth } from './Drawer';

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    paddingLeft: drawerWidth,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    transition: theme.transitions.create('background-color'),
    marginLeft: 0,
    width: 'auto',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const AppBar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <AppBarPrefab className={classes.appBar}>
      <Toolbar>
        <Grid container item>
          <Grid item container xs={6} alignItems="center">
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Grid>
          <Grid item container justify="flex-end" xs={6}>
            <IconButton color="inherit">
              <Badge badgeContent={3} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
            <IconButton color="inherit">
              <LogOutIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBarPrefab>
  );
};

export default AppBar;
