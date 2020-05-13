import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Container, makeStyles } from '@material-ui/core';
import PolkaPattern from '@components/polka-pattern';
import ArchiveList from '@components/archive-list';
import ProfileDetailsHeader from '@components/profile-details-header';
import { getSiteLink } from '@utils/generic-utils';
import { Footer } from '@components/footer';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    minHeight: '100vh',
    padding: '32px 0 64px',
  },
});

export default function IndexPage() {
  const classes = useStyles();
  const router = useRouter();
  const pageLink = getSiteLink(router);
  return (
    <>
      <Head>
        {/* Twtitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@Shub7241" />
        <meta name="twitter:site" content="@Shub7241" />
        <meta name="twitter:url" content={pageLink} />
        <meta name="twitter:title" content="Subroto's Homepage" />
        <meta
          name="twitter:description"
          content="Subroto's Homepage! Get to know him via his Work"
        />
        <meta
          name="twitter:image"
          content="https://user-images.githubusercontent.com/11786283/81849757-a0846e80-9574-11ea-88d1-0c6fc2e1938d.jpg"
        />
        <meta
          name="twitter:image:src"
          content="https://user-images.githubusercontent.com/11786283/81849757-a0846e80-9574-11ea-88d1-0c6fc2e1938d.jpg"
        />
        {/* Others */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Subroto's Homepage" />
        <meta property="og:site_name" content="Subroto" />
        <meta property="og:url" content={pageLink} />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/11786283/81849757-a0846e80-9574-11ea-88d1-0c6fc2e1938d.jpg"
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
        <Footer title={"Subroto's Homepage"} text={pageLink} url={pageLink} />
      </Container>
    </>
  );
}
