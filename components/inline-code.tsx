import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background:
      theme.palette.type === 'dark'
        ? 'rgba(78, 78, 78, 0.7)'
        : 'rgba(0, 0, 0, 0.05)',
    color: theme.palette.type === 'dark' ? '#c66' : '#933',
    padding: '1px 8px',
    margin: '0 2px',
  },
}));

export default function InlineCode(props: any) {
  const classes = useStyles();
  return <code className={classes.root}>{props.children}</code>;
}
