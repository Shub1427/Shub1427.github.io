import React from 'react';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import Head from 'next/head';

import { Container, makeStyles } from '@material-ui/core';
import PolkaPattern from '@components/polka-pattern';
import { FixedNavbar } from 'components/fixed-navbar';
import { Footer } from 'components/footer';

import { getSiteLink } from '@utils/generic-utils';

interface IPolkaContainer {
  pageTitle: string;
  pageDescription: string;
  keywords: string[];
  publishDate: Date;
  ogImage: string;
  children: React.ReactChildren;
}

const useStyles = makeStyles({
  root: {
    position: 'relative',
    padding: '64px 32px',
  },
});

export default function PolkaContainer(props: IPolkaContainer) {
  const classes = useStyles();
  const router = useRouter();
  const pageLink = getSiteLink(router);
  return (
    <>
      <Head>
        {/* Twtitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Shub7241" />
        <meta name="twitter:title" content={props.pageTitle} />
        <meta name="twitter:description" content={props.pageDescription} />
        {/* Others */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={props.pageTitle} />
        <meta property="og:site_name" content="Subroto" />
        <meta property="og:url" content={pageLink} />
        <meta property="og:image" content={props.ogImage} />
        <meta
          property="article:published_time"
          content={format(props.publishDate, 'yyyy/MM/dd')}
        />
        <meta
          property="article:author"
          content="https://twitter.com/Shub7241"
        />
        <title>{props.pageTitle}</title>
        <meta name="description" content={props.pageDescription} />
        <meta
          name="keywords"
          content={`Subroto, Subroto Biswas, Shub, Blog, Articles, Archives, ReactJS, Rust, Javascript, CSS3, upGrad, Software Engineer, Developer, Programmer, Graphics, Games, Rendering ${props.keywords.join(
            ' '
          )}`}
        ></meta>
      </Head>
      <Container maxWidth="md" className={classes.root}>
        <PolkaPattern />
        <FixedNavbar />
        {props.children}
        <Footer title={props.pageTitle} text={pageLink} url={pageLink} />
      </Container>
    </>
  );
}
