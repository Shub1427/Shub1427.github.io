import React from 'react';
import cx from 'classnames';
import { makeStyles, Button, Theme, Typography } from '@material-ui/core';
import { Facebook, Twitter, ShareRounded } from '@material-ui/icons';

interface IFixedNavbarProps {
  title: string;
  text: string;
  url: string;
  className?: string;
}

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 128,
    width: '100%',
  },
  copyright: {
    color: '#aaa',
    fontWeight: 'bold',
  },
  button: {
    '& + &': {
      marginLeft: 16,
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

const facebookShare = (url: string) => {
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
    console.log('Successful share');
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
  const fbClasses = cx(props.classes.button, props.classes.fb);
  const twClasses = cx(props.classes.button, props.classes.tw);
  let allShare = null;
  if (props.navigator.share) {
    allShare = (
      <Button
        size="small"
        variant="contained"
        className={props.classes.button}
        onClick={() => shareLink(props)}
        color="primary"
        startIcon={<ShareRounded />}
      >
        Share
      </Button>
    );
  }

  return (
    <div>
      {allShare}
      <Button
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
      <Button
        size="small"
        variant="contained"
        className={fbClasses}
        startIcon={<Facebook />}
        onClick={() => facebookShare(props.url)}
      >
        Share
      </Button>
    </div>
  );
};

export function Footer(props: IFixedNavbarProps) {
  const classes = useStyles();
  const rootClasses = cx(classes.root, props.className);
  const _navigator = process.browser ? window.navigator : {};
  return (
    <div className={rootClasses}>
      <Typography variant="body2" className={classes.copyright}>
        © Copyright 2020 Subroto Biswas
      </Typography>
      {renderShare({
        ...props,
        navigator: _navigator,
        classes,
      })}
    </div>
  );
}
