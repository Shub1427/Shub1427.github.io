import Link from 'next/link';
import React from 'react';
import fromDistance from 'date-fns/formatDistance';

import {
  Typography,
  makeStyles,
  List,
  ListItem,
  Button,
  Card,
  CardContent,
  CardActions,
  Chip,
  Theme,
} from '@material-ui/core';

import { archiveList, IArchiveItem } from '@constants/archive-list';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: '0 auto',
    padding: '32px 16px',
    width: '90%',

    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: 0,
    },
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
  },
  tags: {
    fontSize: 14,
    marginBottom: 12,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    color: `${theme.palette.secondary.dark}`,
    padding: '0 0 16px',
  },
  dates: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    color: '#aaa',
    fontSize: '0.8rem',
    marginBottom: 16,
  },
}));

const getTagComponent = (page: IArchiveItem) => {
  return page.tags.map(tag => {
    return <Chip key={tag} label={tag} size="small" />;
  });
};

export default function ArchiveList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.centered} variant="h4">
        Archives
      </Typography>
      <List component="nav" aria-label="main mailbox folders">
        {archiveList.map(page => {
          return (
            <ListItem key={page.key}>
              <Card className={classes.root}>
                <CardContent>
                  <div className={classes.tags}>{getTagComponent(page)}</div>
                  <Typography
                    className={classes.title}
                    variant="h5"
                    component="h2"
                  >
                    {page.title}
                  </Typography>
                  <div className={classes.dates}>
                    <span>
                      Updated: {fromDistance(page.updateAt, new Date())} ago
                    </span>
                    <span>
                      Created: {fromDistance(page.createdAt, new Date())} ago
                    </span>
                  </div>
                  <Typography variant="body2" component="p">
                    {page.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={page.link}>
                    <Button color="primary" size="small">
                      Visit
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
