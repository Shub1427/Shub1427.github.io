import React from 'react';

import { Container, makeStyles } from '@material-ui/core';
import PolkaPattern from '@components/polka-pattern';
import Chap01 from './chap-01.md';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    padding: '64px 32px',
  },
});

export default function Chap01Page() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <PolkaPattern />
      <Chap01 />
    </Container>
  );
}
