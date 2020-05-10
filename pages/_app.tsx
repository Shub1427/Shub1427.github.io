import { MDXProvider } from '@mdx-js/react';
import theme from '@utils/theme';
import Head from 'next/head';
import App from 'next/app';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Button, Link } from '@material-ui/core';
import Para from '@components/para';
import Blockquote from '@components/blockquote';
import MDXH1 from '@components/mdx-h1';
import MDXH2 from '@components/mdx-h2';
import MDXH3 from '@components/mdx-h3';
import MDXH4 from '@components/mdx-h4';
import CodeBlock from '@components/code-block';
import InlineCode from '@components/inline-code';
import CodeDiff from '@components/code-diff';
import Image from '@components/progressive-image';
import ThematicBreak from '@components/thematic-break';
import PolkaContainer from '@components/polka-container';
import NoteSubtitle from '@components/note-subtitle';
import { MDXOL, MDXUL, MDXLI } from '@components/mdx-list';

const mdComponents = {
  a: (props: any) => <Link target="_blank" {...props} />,
  h1: (props: any) => <MDXH1 {...props} />,
  h2: (props: any) => <MDXH2 {...props} />,
  h3: (props: any) => <MDXH3 {...props} />,
  h4: (props: any) => <MDXH4 {...props} />,
  p: (props: any) => <Para {...props} />,
  blockquote: (props: any) => <Blockquote {...props} />,
  code: CodeBlock,
  inlineCode: InlineCode,
  thematicBreak: ThematicBreak,
  hr: ThematicBreak,
  ol: MDXOL,
  ul: MDXUL,
  li: MDXLI,
  H1: MDXH1,
  Link,
  Button,
  Blockquote,
  Diff: CodeDiff,
  CodeBlock, // Using codeblock as is gives us more control
  InlineCode,
  Image,
  PolkaContainer,
  NoteSubtitle,
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
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400&display=swap"
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
