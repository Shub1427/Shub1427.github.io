import React from 'react';

import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '0',
    margin: '32px 0 16px',
  },
});

export default function MDXH1(props: any) {
  const classes = useStyles();
  return <Typography variant="h4" className={classes.root} {...props} />;
}
