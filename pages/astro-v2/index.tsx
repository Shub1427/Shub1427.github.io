import React from 'react';

import { Container, makeStyles } from '@material-ui/core';
import Chap01 from './chap-01.md';

const useStyles = makeStyles({
  root: {
    padding: '32px 12px',
  },
});

export default function Chap01Page() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Chap01 />
    </Container>
  );
}
