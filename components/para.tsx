import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    fontFamily: "'Montserrat', sans-serif",
    wordSpacing: 3,
    lineHeight: 1.7,
    '& + &, ol + &, ul + &': {
      marginTop: 32,
    },
  },
});

export default function Para(props: any) {
  const classes = useStyles();
  return <Typography className={classes.root} variant="body1" {...props} />;
}
