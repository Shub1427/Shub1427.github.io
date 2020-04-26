import React from 'react';

import { Container, makeStyles } from '@material-ui/core';
import PolkaPattern from '@components/polka-pattern';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    padding: '64px 32px',
  },
});

export default function PolkaContainer(props: any) {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <PolkaPattern />
      {props.children}
    </Container>
  );
}
