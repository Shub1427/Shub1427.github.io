import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { makeStyles, Breadcrumbs, Link as MLink } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default function PageBreadcrumbs() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <Breadcrumbs className={classes.root} aria-label="breadcrumb">
      <Link href="#">
        <MLink color="inherit">{router.pathname}</MLink>
      </Link>
    </Breadcrumbs>
  );
}
