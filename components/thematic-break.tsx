import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  thematicBreak: {
    color: theme.palette.type === 'dark' ? '#d2d2d2' : '#666',
    textAlign: 'center',
    marginTop: '32px',
    fontSize: '32px',
    fontWeight: 300,
    border: 'medium none',
    '&:before': {
      content: "'***'",
      lineHeight: 1.4,
      textIndent: '1em',
      letterSpacing: '1em',
    },
  },
}));

export default function ThematicBreak() {
  const classes = useStyles();
  return <hr className={classes.thematicBreak} />;
}
