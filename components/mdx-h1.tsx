import React from 'react';

import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '0',
    borderBottom: '1px solid #ddd',
    marginBottom: 48,
  },
});

export default function MDXH1(props: any) {
  const classes = useStyles();
  return <Typography variant="h2" className={classes.root} {...props} />;
}
