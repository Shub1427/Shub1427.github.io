import React from 'react';

import { Typography, makeStyles, Theme, IconButton } from '@material-ui/core';
import { Link as LinkIcon } from '@material-ui/icons';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    '&:hover > button': {
      opacity: 1,
    },
  },
  header: {
    color: theme.palette.type === 'dark' ? '#e2e2e2' : '#222',
    padding: '0',
    margin: '48px 0 16px',
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 300,
  },
  link: {
    alignSelf: 'center',
    opacity: 0,
    marginTop: '2.5rem',
    transition: 'opacity 0.3s ease-out',
  },
}));

export default function MDXH2(props: any) {
  const classes = useStyles();
  return (
    <Link href={`#${props.id}`}>
      <div className={classes.root}>
        <Typography variant="h4" className={classes.header} {...props} />
        <IconButton aria-label="anchor link" className={classes.link}>
          <LinkIcon />
        </IconButton>
      </div>
    </Link>
  );
}
