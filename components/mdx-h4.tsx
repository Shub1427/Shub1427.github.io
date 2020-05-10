import React from 'react';

import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '0',
    margin: '32px 0 12px',
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 600,
    fontSize: '1rem',
  },
});

export default function MDXH4(props: any) {
  const classes = useStyles();
  return <Typography variant="h6" className={classes.root} {...props} />;
}
