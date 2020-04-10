import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    padding: '32px 16px',
  },
  description: {
    marginTop: 16,
    maxWidth: 900,
  },
});

export default function ProfileDetailsHeader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img height="100%" src="/images/logo-small.png" alt="Shub's logo" />
      <Typography variant="h3"> Subroto Biswas</Typography>
      <Typography variant="subtitle1" className={classes.description}>
        Subroto Biswas is a working professional, currently working in upGrad.
        This site is about his work. He is interested in various kinds of
        Graphics programming, and is a student by heart. Most of his work here
        reflects his learning and research he has been doing in Graphics using
        Rust lang.
      </Typography>
    </div>
  );
}
