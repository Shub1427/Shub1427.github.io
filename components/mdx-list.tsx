import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.type === 'dark' ? '#ccc' : '#444',
    fontSize: '1rem',
    lineHeight: 1.7,
    fontWeight: 200,

    'p + &': {
      marginTop: 32,
    },

    'li > &': {
      marginTop: 'initial',
    },
  },
  item: {
    '& + &': {
      marginTop: 8,
    },

    '& > ul > &, & > ol > &': {
      marginTop: '0',
    },
  },
}));

export const MDXUL = (props: any) => {
  const classes = useStyles();
  return <ul className={classes.root} {...props} />;
};

export const MDXOL = (props: any) => {
  const classes = useStyles();
  return <ol className={classes.root} {...props} />;
};

export const MDXLI = (props: any) => {
  const classes = useStyles();
  return <li className={classes.item} {...props} />;
};
