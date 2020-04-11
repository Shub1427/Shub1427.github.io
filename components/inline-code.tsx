import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: '#eee',
    color: '#933',
    padding: '4px 8px',
  },
});

export default function InlineCode(props: any) {
  const classes = useStyles();
  return <code className={classes.root}>{props.children}</code>;
}
