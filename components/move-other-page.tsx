import React from 'react';
import cx from 'classnames';

import { makeStyles, Button, Grid, Tooltip } from '@material-ui/core';
import { ChevronRight, ChevronLeft } from '@material-ui/icons';

export interface IMoveLinks {
  prev?: string;
  next?: string;
  prevLabel?: string;
  nextLabel?: string;
}

const useStyles = makeStyles({
  root: {
    marginTop: 64,
  },
  button: {
    maxWidth: '100%',
  },
  label: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  labelLeft: {
    textAlign: 'left',
  },
  labelRight: {
    textAlign: 'right',
  },
});

export default function MoveOtherPage(props: IMoveLinks) {
  const classes = useStyles();
  const prevLabelClasses = cx(classes.label, classes.labelLeft);
  const nextLabelClasses = cx(classes.label, classes.labelRight);
  return (
    <Grid
      className={classes.root}
      container
      justify="space-between"
      spacing={2}
    >
      <Grid item xs={12} md={6}>
        {props.prev && (
          <Button
            className={classes.button}
            color="secondary"
            startIcon={<ChevronLeft />}
            href={props.prev}
          >
            <Tooltip title={props.prevLabel || ''} aria-label={props.prevLabel}>
              <span className={prevLabelClasses}>{props.prevLabel}</span>
            </Tooltip>
          </Button>
        )}
      </Grid>
      <Grid item xs={12} md={6}>
        {props.next && (
          <Button
            className={classes.button}
            color="secondary"
            endIcon={<ChevronRight />}
            href={props.next}
          >
            <Tooltip title={props.nextLabel || ''} aria-label={props.nextLabel}>
              <span className={nextLabelClasses}>{props.nextLabel}</span>
            </Tooltip>
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
