import React from 'react';
import cx from 'classnames';
import { Card, makeStyles, colors, Theme } from '@material-ui/core';

export interface IBlockquoteProps {
  type: 'info' | 'warn' | 'error';
  children: React.ReactChild;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.type === 'dark' ? '#444' : '#f2f2f2',
    padding: '16px 8px',
    color: theme.palette.type === 'dark' ? '#999' : '#888',
    fontWeight: 400,
    margin: '12px 0',

    '& > p, & > ul, & > ol, & > div': {
      color: theme.palette.type === 'dark' ? '#999' : '#888',
      fontSize: '0.9rem',
      fontWeight: 400,
    },

    'p + &, & + &': {
      marginTop: 32,
    },
  },
  info: {
    borderLeft: `12px solid ${
      theme.palette.type === 'dark' ? colors.blue['800'] : colors.blue['300']
    }`,
  },
  warn: {
    borderLeft: `12px solid ${
      theme.palette.type === 'dark' ? colors.yellow['800'] : colors.amber['300']
    }`,
  },
  error: {
    borderLeft: `12px solid ${
      theme.palette.type === 'dark'
        ? colors.deepOrange['900']
        : colors.red['400']
    }`,
  },
}));

export default function Blockquote(props: IBlockquoteProps) {
  const classes = useStyles();
  const rootClasses = cx(classes.root, classes[props.type]);
  return (
    <Card elevation={0} className={rootClasses}>
      {props.children}
    </Card>
  );
}

Blockquote.defaultProps = {
  type: 'info',
};
