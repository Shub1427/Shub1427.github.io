import React from 'react';
import cx from 'classnames';
import { makeStyles, Theme, Grid, Tooltip } from '@material-ui/core';

import Link from 'next/link';
import DarkModeSwitch from 'components/dark-mode-switch';

interface IFixedNavbarProps {
  className?: string;
  hideRootNav?: boolean;
}

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
    maxHeight: 48,
  },
  rootNav: {
    cursor: 'pointer',
  },
  rightBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'center',
    width: '100%',
  },
}));

export function FixedNavbar({ className, hideRootNav }: IFixedNavbarProps) {
  const classes = useStyles();
  const rightBoxClasses = cx(classes.rightBox, className);
  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        {!hideRootNav && (
          <Link href="/">
            <Tooltip title="Go Home" aria-label="Go Home" placement="right">
              <img
                className={classes.rootNav}
                height="32"
                src="/images/logo-small.png"
                alt="Shub's logo"
              />
            </Tooltip>
          </Link>
        )}
      </Grid>
      <Grid item xs={6}>
        <div className={rightBoxClasses}>
          <DarkModeSwitch />
        </div>
      </Grid>
    </Grid>
  );
}
