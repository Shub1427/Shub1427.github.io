import React from 'react';

import { Typography, makeStyles } from '@material-ui/core';
import NoteSubtitle from './note-subtitle';

export interface IMDXH1Props {
  children: React.ReactChild;
  updatedAt: Date;
  wordCount: number;
}

const useStyles = makeStyles({
  root: {
    padding: '0',
    marginBottom: 48,
  },
});

export default function MDXH1(props: IMDXH1Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2">{props.children}</Typography>
      {props.updatedAt && props.wordCount && (
        <NoteSubtitle date={props.updatedAt} totalWords={props.wordCount} />
      )}
    </div>
  );
}
