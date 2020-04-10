import React from 'react';

import { Card, makeStyles, colors } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    borderLeft: `12px solid ${colors.blue['300']}`,
    background: '#f2f2f2',
    padding: '16px 8px',
    color: '#777',
    margin: '12px 0',

    '& > p': {
      fontSize: '0.9rem',
    },
  },
});

export default function Blockquote(props: any) {
  const classes = useStyles();
  return (
    <Card elevation={0} className={classes.root}>
      {props.children}
    </Card>
  );
}
