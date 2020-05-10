import React from 'react';

import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '0',
    margin: '32px 0 12px',
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 400,
  },
});

export default function MDXH3(props: any) {
  const classes = useStyles();
  return <Typography variant="h5" className={classes.root} {...props} />;
}
