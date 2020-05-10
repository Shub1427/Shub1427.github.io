import React from 'react';

import { Container, makeStyles } from '@material-ui/core';
import PolkaPattern from '@components/polka-pattern';
import DarkModeSwitch from 'components/dark-mode-switch';

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
      <DarkModeSwitch />
      {props.children}
    </Container>
  );
}
