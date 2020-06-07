import React from 'react';
import kebabCase from 'lodash/kebabCase';

import { Typography, makeStyles, Theme } from '@material-ui/core';
import NoteSubtitle from './note-subtitle';

export interface IMDXH1Props {
  id: string;
  children: React.ReactChild;
  updatedAt: Date;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.type === 'dark' ? '#e2e2e2' : '#222',
    padding: '0',
    marginBottom: 48,
  },
  heading: {
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 200,
  },
  subtitleWrapper: {
    marginTop: 12,
    fontWeight: 600,
  },
  subtitle: {
    fontWeight: 600,
  },
}));

export default function MDXH1(props: IMDXH1Props) {
  const { id, children, updatedAt, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        id={kebabCase(id)}
        className={classes.heading}
        variant="h2"
        {...rest}
      >
        {children}
      </Typography>
      {updatedAt && (
        <NoteSubtitle
          className={classes.subtitleWrapper}
          fontClasses={classes.subtitle}
          date={props.updatedAt}
        />
      )}
    </div>
  );
}
