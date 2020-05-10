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
  heading: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 200,
    marginBottom: 32,
  },
  item: {
    '& + &': {
      marginTop: 32,
    },
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
    display: 'block',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: `${theme.palette.secondary.dark}`,
    padding: '0 0 16px',
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 300,
  },
  description: {
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
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
      <Typography className={classes.heading} variant="h2">
        Archives
      </Typography>
      <List component="nav" aria-label="main mailbox folders">
        {sortedArchiveList.map(page => {
          return (
            <ListItem className={classes.item} key={page.key}>
              <Card className={classes.root} elevation={4}>
                <CardContent>
                  <div className={classes.tags}>
                    {getTagComponent(page, classes)}
                  </div>
                  <Typography
                    className={classes.title}
                    variant="h4"
                    component="h2"
                  >
                    {page.title}
                  </Typography>
                  <div className={classes.dates}>
                    <span>
                      Updated: {fromDistance(page.updatedAt, new Date())} ago
                    </span>
                    <span>
                      Created: {fromDistance(page.createdAt, new Date())} ago
                    </span>
                  </div>
                  <Typography
                    className={classes.description}
                    variant="body2"
                    component="p"
                  >
                    {page.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={page.link}>
                    <Button
                      disabled={!page.isPublished}
                      color="primary"
                      fullWidth
                    >
                      <b>Visit</b>
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
