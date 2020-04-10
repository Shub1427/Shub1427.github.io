import Link from 'next/link';
import React from 'react';

import { Typography, makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const pages = [
  {
    key: 'astro-v2',
    link: '/astro-v2',
    text: 'Astro Blaster V2 in Rust',
  },
];

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    padding: '32px 16px',
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default function ArchiveList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.centered} variant="h4">
        Archives
      </Typography>
      <List component="nav" aria-label="main mailbox folders">
        {pages.map(page => {
          return (
            <Link key={page.key} href={page.link}>
              <ListItem button>
                <ListItemText primary={page.text} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );
}
