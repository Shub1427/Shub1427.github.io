import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    '& + &': {
      marginTop: 16,
    },
  },
});

export default function Para(props: any) {
  const classes = useStyles();
  return <Typography className={classes.root} variant="body1" {...props} />;
}
