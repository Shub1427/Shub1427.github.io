import React from 'react';
import { format } from 'date-fns';

import { Typography, makeStyles } from '@material-ui/core';

export interface INoteSubtitle {
  date: Date;
  totalWords: number;
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    color: '#888',
    marginTop: '-48px',
  },
  description: {
    display: 'inline-block',
  },
  separator: {
    fontSize: '1.5em',
    lineHeight: 0.8,
    display: 'inline-block',
    margin: '0 4px',
  },
});

/**
 * Getting Reading Time estimate is difficult, if you don't have char count
 * This Component requires a char count, to get an estimate for reading time.
 *
 * Googling avg reading time, I found that an adults avg reading time is,
 * 200 - 250 words peer minute, thus I will be using 225 words per minute as
 * my reading time estimate.
 */
export default function NoteSubtitle(props: INoteSubtitle) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="body2" className={classes.description}>
        {format(props.date, 'MMM dd')}
      </Typography>
      <span className={classes.separator}>•</span>
      <Typography variant="body2" className={classes.description}>
        {Math.ceil(props.totalWords / 225)} min read
      </Typography>
    </div>
  );
}
