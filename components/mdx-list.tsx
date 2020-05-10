import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    fontSize: '1rem',
    lineHeight: 1.7,

    'p + &': {
      marginTop: 32,
    },

    'li > &': {
      marginTop: 'initial',
    },
  },
});

export const MDXUL = (props: any) => {
  const classes = useStyles();
  return <ul className={classes.root} {...props} />;
};

export const MDXOL = (props: any) => {
  const classes = useStyles();
  return <ol className={classes.root} {...props} />;
};

export const MDXLI = (props: any) => {
  return <li {...props} />;
};
