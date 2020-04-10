import { MDXProvider } from '@mdx-js/react';
import theme from '@utils/theme';
import Head from 'next/head';
import App from 'next/app';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Button, Typography, Link } from '@material-ui/core';
import Blockquote from '@components/blockquote';
import MDXH1 from '@components/mdx-h1';
import MDXH2 from '@components/mdx-h2';
import CodeBlock from '@components/code-block';

const mdComponents = {
  a: (props: any) => <Link target="_blank" {...props} />,
  h1: (props: any) => <MDXH1 {...props} />,
  h2: (props: any) => <MDXH2 {...props} />,
  h3: (props: any) => <Typography variant="h6" {...props} />,
  p: (props: any) => <Typography variant="body1" {...props} />,
  blockquote: (props: any) => <Blockquote {...props} />,
  code: CodeBlock,
  Button,
};

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />
          <link href="/css/main.css" rel="stylesheet" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <MDXProvider components={mdComponents}>
            <Component {...pageProps} />
          </MDXProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
