import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import Head from 'next/head';

import { Container, makeStyles } from '@material-ui/core';
import PolkaPattern from '@components/polka-pattern';
import { FixedNavbar } from 'components/fixed-navbar';
import { Footer } from 'components/footer';

import { getSiteLink } from '@utils/generic-utils';
import { wordCounter } from '@utils/word-counter';

interface IPolkaContainer {
  pageTitle: React.ReactNode;
  pageTitleString: string;
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

export const MDXWordCountContext = React.createContext(0);

export default function PolkaContainer(props: IPolkaContainer) {
  const [wordCount] = useState(() => {
    return wordCounter(props.children);
  });
  const classes = useStyles();
  const router = useRouter();
  const pageLink = getSiteLink(router);
  return (
    <>
      <Head>
        {/* Twtitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Shub7241" />
        <meta name="twitter:title" content={props.pageTitleString} />
        <meta name="twitter:description" content={props.pageDescription} />
        {/* Others */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={props.pageTitleString} />
        <meta property="og:site_name" content="Subroto" />
        <meta property="og:url" content={pageLink} />
        <meta property="og:image" content={`${props.ogImage}?2`} />
        <meta
          property="article:published_time"
          content={format(props.publishDate, 'yyyy/MM/dd')}
        />
        <meta
          property="article:author"
          content="https://twitter.com/Shub7241"
        />
        <title>{props.pageTitleString}</title>
        <meta name="description" content={props.pageDescription} />
        <meta
          name="keywords"
          content={`Subroto, Subroto Biswas, Shub, Blog, Articles, Archives, ReactJS, Rust, Javascript, CSS3, upGrad, Software Engineer, Developer, Programmer, Graphics, Games, Rendering ${props.keywords.join(
            ' '
          )}`}
        ></meta>
      </Head>
      <MDXWordCountContext.Provider value={wordCount}>
        <Container maxWidth="md" className={classes.root}>
          <PolkaPattern />
          <FixedNavbar />
          {props.children}
          <Footer
            title={props.pageTitleString}
            text={pageLink}
            url={pageLink}
          />
        </Container>
      </MDXWordCountContext.Provider>
    </>
  );
}
