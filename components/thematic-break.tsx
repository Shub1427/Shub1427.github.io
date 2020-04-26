import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  thematicBreak: {
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
});

export default function ThematicBreak() {
  const classes = useStyles();
  return <hr className={classes.thematicBreak} />;
}
