import React from 'react';
import { Typography, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.type === 'dark' ? '#ccc' : '#444',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 200,
    wordSpacing: 3,
    lineHeight: 1.7,
    '& + &, ol + &, ul + &': {
      marginTop: 32,
    },
  },
}));

export default function Para(props: any) {
  const classes = useStyles();
  return <Typography className={classes.root} variant="body1" {...props} />;
}
