import React, { useContext } from 'react';
import cx from 'classnames';
import { format } from 'date-fns';

import { Typography, makeStyles } from '@material-ui/core';
import { MDXWordCountContext } from './polka-container';

export interface INoteSubtitle {
  date: Date;
  className?: string;
  fontClasses?: string;
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    color: '#888',
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
  const wordCount = useContext(MDXWordCountContext);
  const classes = useStyles();
  const rootClasses = cx(classes.root, props.className);
  const descriptionClasses = cx(classes.description, props.fontClasses);
  return (
    <div className={rootClasses}>
      <Typography variant="body2" className={descriptionClasses}>
        {format(props.date, 'dd MMM, yyyy')}
      </Typography>
      <span className={classes.separator}>•</span>
      <Typography variant="body2" className={descriptionClasses}>
        {Math.ceil(wordCount / 200)} min read
      </Typography>
    </div>
  );
}
