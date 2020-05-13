import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Container, makeStyles } from '@material-ui/core';
import PolkaPattern from '@components/polka-pattern';
import ArchiveList from '@components/archive-list';
import ProfileDetailsHeader from '@components/profile-details-header';
import { getSiteLink } from '@utils/generic-utils';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    minHeight: '100vh',
  },
});

export default function IndexPage() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <>
      <Head>
        {/* Twtitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Shub7241" />
        <meta name="twitter:title" content="Subroto's Homepage" />
        <meta
          name="twitter:description"
          content="Subroto's Homepage! Get to know him via his Work"
        />
        {/* Others */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Subroto's Homepage" />
        <meta property="og:site_name" content="Subroto" />
        <meta property="og:url" content={getSiteLink(router)} />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/11786283/81763575-307ed580-94ed-11ea-8551-0b903e32d789.jpg"
        />
        <meta property="article:published_time" content="2019-11-14" />
        <meta
          property="article:author"
          content="https://twitter.com/Shub7241"
        />
        <title>Home | Shub</title>
        <meta
          name="description"
          content="Subroto's Homepage! Get to know him via his Work"
        />
        <meta
          name="keywords"
          content="Subroto, Subroto Biswas, Shub, Blog, Articles, Archives, ReactJS, Rust, Javascript, CSS3, upGrad, Software Engineer, Developer, Programmer, Graphics, Games, Rendering"
        ></meta>
      </Head>
      <Container maxWidth="md" className={classes.root}>
        <PolkaPattern />
        <ProfileDetailsHeader />
        <ArchiveList />
      </Container>
    </>
  );
}
