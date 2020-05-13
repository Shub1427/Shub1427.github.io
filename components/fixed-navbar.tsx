import React from 'react';
import cx from 'classnames';
import { makeStyles, Theme } from '@material-ui/core';

import DarkModeSwitch from 'components/dark-mode-switch';

interface IFixedNavbarProps {
  className?: string;
}

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'center',
    width: '100%',
  },
}));

export function FixedNavbar({ className }: IFixedNavbarProps) {
  const classes = useStyles();
  const rootClasses = cx(classes.root, className);
  return (
    <div className={rootClasses}>
      <DarkModeSwitch />
    </div>
  );
}
