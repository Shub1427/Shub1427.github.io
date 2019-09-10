import { theme } from '@utils/theme';
import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
