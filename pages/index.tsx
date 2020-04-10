import React from 'react';

import { Container, makeStyles } from '@material-ui/core';
import PolkaPattern from '@components/polka-pattern';
import ArchiveList from '@components/archive-list';
import ProfileDetailsHeader from '@components/profile-details-header';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    minHeight: '100vh',
  },
});

export default function IndexPage() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <PolkaPattern />
      <ProfileDetailsHeader />
      <ArchiveList />
    </Container>
  );
}
