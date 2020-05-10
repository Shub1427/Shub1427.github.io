import React from 'react';
import cx from 'classnames';
import { Card, makeStyles, colors } from '@material-ui/core';

export interface IBlockquoteProps {
  type: 'info' | 'warn' | 'error';
  children: React.ReactChild;
}

const useStyles = makeStyles({
  root: {
    background: '#f2f2f2',
    padding: '16px 8px',
    color: '#777',
    margin: '12px 0',

    '& > p, & > ul, & > ol': {
      fontSize: '0.9rem',
    },

    'p + &, & + p, & + &': {
      marginTop: 32,
    },
  },
  info: {
    borderLeft: `12px solid ${colors.blue['300']}`,
  },
  warn: {
    borderLeft: `12px solid ${colors.amber['300']}`,
  },
  error: {
    borderLeft: `12px solid ${colors.red['400']}`,
  },
});

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
