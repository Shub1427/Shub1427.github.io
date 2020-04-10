import React from 'react';

import { Container, makeStyles } from '@material-ui/core';
import ArchiveList from '@components/archive-list';
import ProfileDetailsHeader from '@components/profile-details-header';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    background: '#f2f2f2',
  },
});

export default function IndexPage() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <ProfileDetailsHeader />
      <ArchiveList />
    </Container>
  );
}
