import React from 'react';

import { Typography, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.type === 'dark' ? '#e2e2e2' : '#222',
    padding: '0',
    margin: '48px 0 16px',
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 300,
  },
}));

export default function MDXH2(props: any) {
  const classes = useStyles();
  return <Typography variant="h4" className={classes.root} {...props} />;
}
