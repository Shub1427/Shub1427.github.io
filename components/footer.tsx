import React, { useState, useEffect, SyntheticEvent } from 'react';
import cx from 'classnames';
import { makeStyles, Button, Theme, Typography, Grid } from '@material-ui/core';
import { Share, Facebook, Twitter } from '@material-ui/icons';
import * as gtag from '@utils/gtag';

interface IFixedNavbarProps {
  title: string;
  text: string;
  url: string;
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 128,
    padding: '0 16px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  copyright: {
    color: '#aaa',
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      marginBottom: 16,
    },
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  buttonSpan: {
    '&+&': {
      marginTop: 0,
      marginLeft: 16,
    },
    display: 'inline-flex',
    flex: 1,
    maxWidth: 100,
  },
  share: {
    color: '#fff',
    background: '#444',
    '&:hover, &focus, &:active': {
      background: '#333',
    },
  },
  fb: {
    color: '#fff',
    background: '#4361b3',
    '&:hover, &focus, &:active': {
      background: '#254395',
    },
  },
  tw: {
    color: '#fff',
    background: '#4fafed',
    '&:hover, &focus, &:active': {
      background: '#3191CF',
    },
  },
}));

const facebookShare = (event: SyntheticEvent, url: string) => {
  event.preventDefault();
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    'facebook-share-dialog',
    'width=626,height=436'
  );
  return false;
};

const shareLink = async (props: IFixedNavbarProps & { navigator: any }) => {
  try {
    props.navigator.share &&
      (await props.navigator.share({
        title: props.title,
        text: `Check out ${props.text}`,
        url: props.url,
      }));
  } catch (error) {
    console.log('Error sharing', error);
  }
};

const renderShare = (
  props: IFixedNavbarProps & {
    navigator: any;
    classes: ReturnType<typeof useStyles>;
  }
) => {
  const shareClasses = cx(props.classes.share);
  const fbClasses = cx(props.classes.fb);
  const twClasses = cx(props.classes.tw);
  let allShare = null;
  if (props.navigator.share) {
    allShare = (
      <Button
        key="share"
        size="small"
        variant="contained"
        className={shareClasses}
        startIcon={<Share />}
        onClick={() => {
          gtag.event({
            action: 'share_click',
            category: 'Native Share',
          });
          shareLink(props);
        }}
      >
        Share
      </Button>
    );
  }

  return (
    <Grid item className={props.classes.buttonWrapper} xs={12} sm={6}>
      <span className={props.classes.buttonSpan}>{allShare}</span>
      <span className={props.classes.buttonSpan}>
        <Button
          key="twitter"
          size="small"
          variant="contained"
          className={twClasses}
          startIcon={<Twitter />}
          target="_blank"
          rel="noopener noreferrer"
          href={`https://twitter.com/intent/tweet?text=${props.url} - ${props.title}`}
        >
          Share
        </Button>
      </span>
      <span className={props.classes.buttonSpan}>
        <Button
          key="facebook"
          size="small"
          variant="contained"
          className={fbClasses}
          startIcon={<Facebook />}
          onClick={(event) => {
            gtag.event({
              action: 'share_click',
              category: 'Facebook',
            });
            facebookShare(event, props.url);
          }}
        >
          Share
        </Button>
      </span>
    </Grid>
  );
};

export function Footer(props: IFixedNavbarProps) {
  const [isBrowser, setIsBrowser] = useState(process.browser);
  const classes = useStyles();
  const rootClasses = cx(classes.root, props.className);
  const _navigator = isBrowser ? window.navigator : {};

  useEffect(() => {
    setIsBrowser(process.browser);
  }, [process.browser]);
  return (
    <Grid container item xs={12} className={rootClasses}>
      <Typography variant="body2" className={classes.copyright}>
        © Copyright 2020 Subroto Biswas
      </Typography>
      {renderShare({
        ...props,
        navigator: _navigator,
        classes,
      })}
    </Grid>
  );
}
