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
  buttonLeft: {
    float: 'left',
  },
  buttonRight: {
    float: 'right',
  },
  label: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

export default function MoveOtherPage(props: IMoveLinks) {
  const classes = useStyles();
  const prevLinkClasses = cx(classes.button, classes.buttonLeft);
  const nextLinkClasses = cx(classes.button, classes.buttonRight);
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
            className={prevLinkClasses}
            color="secondary"
            startIcon={<ChevronLeft />}
            href={props.prev}
          >
            <Tooltip title={props.prevLabel || ''} aria-label={props.prevLabel}>
              <span className={classes.label}>{props.prevLabel}</span>
            </Tooltip>
          </Button>
        )}
      </Grid>
      <Grid item xs={12} md={6}>
        {props.next && (
          <Button
            className={nextLinkClasses}
            color="secondary"
            endIcon={<ChevronRight />}
            href={props.next}
          >
            <Tooltip title={props.nextLabel || ''} aria-label={props.nextLabel}>
              <span className={classes.label}>{props.nextLabel}</span>
            </Tooltip>
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
