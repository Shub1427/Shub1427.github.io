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
import { sortBy, SortTypes, SortOrder } from '@utils/sort-by';

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
  tagItem: {
    '& + &': {
      marginLeft: 8,
    },
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

const getTagComponent = (
  page: IArchiveItem,
  classes: ReturnType<typeof useStyles>
) => {
  return page.tags.map(tag => {
    return (
      <Chip key={tag} className={classes.tagItem} label={tag} size="small" />
    );
  });
};

export default function ArchiveList() {
  const classes = useStyles();
  const sortedArchiveList = sortBy(
    archiveList,
    SortTypes.CREATED_AT,
    SortOrder.DESC
  );
  return (
    <div className={classes.root}>
      <Typography className={classes.centered} variant="h4">
        Archives
      </Typography>
      <List component="nav" aria-label="main mailbox folders">
        {sortedArchiveList.map(page => {
          return (
            <ListItem key={page.key}>
              <Card className={classes.root} elevation={4}>
                <CardContent>
                  <div className={classes.tags}>
                    {getTagComponent(page, classes)}
                  </div>
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
                    <Button
                      disabled={!page.isPublished}
                      color="primary"
                      size="small"
                    >
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
