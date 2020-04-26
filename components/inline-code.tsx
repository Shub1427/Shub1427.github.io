import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: 'rgba(0, 0, 0, 0.05)',
    color: '#933',
    padding: '1px 8px',
    margin: '0 2px',
  },
});

export default function InlineCode(props: any) {
  const classes = useStyles();
  return <code className={classes.root}>{props.children}</code>;
}
