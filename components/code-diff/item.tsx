import React, { useEffect, useRef } from 'react';
import { useImmer } from 'use-immer';
import { makeStyles } from '@material-ui/core';
import cx from 'classnames';
import createElement from 'react-syntax-highlighter/dist/cjs/create-element';

export interface IDiffItemProps {
  isAddedLine: boolean;
  isRemovedLine: boolean;
  index: number;
  row: React.ReactNode;
  stylesheet: any;
  useInlineStyles: any;
}

const useStyles = makeStyles({
  listItem: {
    position: 'relative',
  },
  diffNode: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    marginLeft: '-14px',
  },
  diffAdd: {
    background: 'rgba(139, 195, 74, 0.2)',
    borderLeft: '4px solid rgb(139, 195, 74)',
  },
  diffRemove: {
    background: 'rgba(239, 154, 154, 0.2)',
    borderLeft: '4px solid rgb(239, 154, 154)',
  },
});

export default function DiffItem(props: IDiffItemProps) {
  const classes = useStyles();
  const addClasses = cx(classes.diffNode, classes.diffAdd);
  const removeClasses = cx(classes.diffNode, classes.diffRemove);
  const [styles, updateWidth] = useImmer({
    width: 'auto',
  });
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (rootRef.current) {
      const width = rootRef.current.parentElement?.parentElement?.scrollWidth;
      updateWidth(draft => {
        draft.width = `${width}px`;
      });
    }
  }, []);
  const node2 = createElement({
    node: props.row,
    stylesheet: props.stylesheet,
    useInlineStyles: props.useInlineStyles,
  });
  return (
    <div ref={rootRef} className={classes.listItem}>
      {props.isAddedLine && (
        <div className={addClasses} style={{ width: styles.width }} />
      )}
      {props.isRemovedLine && (
        <div className={removeClasses} style={{ width: styles.width }} />
      )}
      {node2}
    </div>
  );
}
