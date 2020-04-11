import React from 'react';
import { makeStyles, Typography, Theme, IconButton } from '@material-ui/core';
import { socialLinks } from '@constants/social-links';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    padding: '32px 16px',
  },
  description: {
    marginTop: 16,
    maxWidth: 900,
  },
  highlight: {
    color: `${theme.palette.primary.light}`,
    fontWeight: 'bold',
  },
  socialWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: 16,
  },
}));

export default function ProfileDetailsHeader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img height="100%" src="/images/logo-small.png" alt="Shub's logo" />
      <Typography variant="h3" color="primary">
        Subroto Biswas
      </Typography>
      <Typography variant="subtitle1" className={classes.description}>
        Subroto Biswas is a working professional, currently working at &nbsp;
        <span className={classes.highlight}>upGrad</span>, as a Software
        Engineer. This site is about his work, learnings and research. He is
        interested in various kinds of Graphics programming and is a student by
        heart. Most of his professional work, involves Web Development, using
        Javascript and ReactJS, but he is also quite fond of Graphics and in his
        leisure time he works on Game Dev and Render engines using Rust Lang.
      </Typography>
      <div className={classes.socialWrapper}>
        {socialLinks.map(social => (
          <IconButton
            key={social.key}
            href={social.link}
            target="_blank"
            color="secondary"
            aria-label={social.key}
          >
            <social.icon style={{ fill: social.color }} />
          </IconButton>
        ))}
      </div>
    </div>
  );
}
