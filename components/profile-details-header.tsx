import React from 'react';
import { makeStyles, Typography, Theme, IconButton } from '@material-ui/core';
import { socialLinks, socialLinksDark } from '@constants/social-links';

import { usePaletteModeStore } from '@hoc/palette-mode';
import { FixedNavbar } from 'components/fixed-navbar';

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
  title: {
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 200,
  },
  description: {
    marginTop: 16,
    wordSpacing: 3,
    lineHeight: 1.7,
    fontWeight: 400,
    color: theme.palette.type === 'dark' ? theme.palette.common.white : '#666',
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
  const { darkMode } = usePaletteModeStore();
  const links = darkMode ? socialLinksDark : socialLinks;
  return (
    <div className={classes.root}>
      <FixedNavbar />
      <img height="100%" src="/images/logo-small.png" alt="Shub's logo" />
      <Typography className={classes.title} variant="h2" color="primary">
        Subroto Biswas
      </Typography>
      <Typography variant="subtitle1" className={classes.description}>
        Subroto Biswas is a working professional, currently working at &nbsp;
        <span className={classes.highlight}>upGrad</span>, as a Senior Software
        Engineer. This site is about his work, learnings and research. He is
        interested in various kinds of Graphics programming and is a student by
        heart. Most of his professional work, involves Web Development, using
        Javascript and ReactJS, but he is also quite fond of Graphics and in his
        leisure time he works on Game Dev and Render engines using Rust Lang.
      </Typography>
      <div className={classes.socialWrapper}>
        {links.map((social) => (
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
