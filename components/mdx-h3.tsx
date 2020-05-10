import React from 'react';

import { Typography, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.type === 'dark' ? '#e2e2e2' : '#222',
    padding: '0',
    margin: '32px 0 12px',
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 400,
  },
}));

export default function MDXH3(props: any) {
  const classes = useStyles();
  return <Typography variant="h5" className={classes.root} {...props} />;
}
