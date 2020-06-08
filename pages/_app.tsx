import { MDXProvider } from '@mdx-js/react';
import defaultTheme, { darkTheme } from '@utils/theme';
import Head from 'next/head';
import App, { AppInitialProps } from 'next/app';
import Router from 'next/router';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Using Redux Store is the only way to use LocalStorage with NextJS app
// right now, it doesn't support pure static builds
import { staticStore } from 'store';
import { Button } from '@material-ui/core';
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
import MoveOtherPage from '@components/move-other-page';
import Link from '@components/link';
import { MDXOL, MDXUL, MDXLI } from '@components/mdx-list';
import { NextComponentType } from 'next';
import {
  withPaletteModeProvider,
  usePaletteModeStore,
} from '@hoc/palette-mode';
import { pageview } from '@utils/gtag';

const mdComponents = {
  a: (props: any) => <Link external {...props} />,
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
  MoveOtherPage,
};

const Content = (props: AppInitialProps & { Component: NextComponentType }) => {
  const { Component, pageProps } = props;
  const { darkMode } = usePaletteModeStore();
  const theme = darkMode ? darkTheme : defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <MDXProvider components={mdComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
};

const WithPaletteModeContent = withPaletteModeProvider(Content);

Router.events.on('routeChangeComplete', (url) => pageview(url));

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  public render() {
    return (
      <React.Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="author" content="Subroto Biswas" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://user-images.githubusercontent.com/11786283/81848987-81d1a800-9573-11ea-9b04-2f7bc9a8ee21.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="https://user-images.githubusercontent.com/11786283/81849133-b80f2780-9573-11ea-87c5-1b91ecdd0786.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="https://user-images.githubusercontent.com/11786283/81849184-cfe6ab80-9573-11ea-8e90-017a74baa812.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="https://user-images.githubusercontent.com/11786283/81849345-06242b00-9574-11ea-9d22-43c549f88e01.png"
            sizes="192x192"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
          <link href="/css/main.css" rel="stylesheet" />
        </Head>
        <Provider store={staticStore}>
          <WithPaletteModeContent {...this.props} />
        </Provider>
      </React.Fragment>
    );
  }
}
