import { Error404 } from '@components/errors/404';
import React from 'react';

interface IErrorProps {
  statusCode: number;
}

class Error extends React.Component<IErrorProps> {
  // This is proper way to handle error pages... But since I am using Static Page (Github Pages)
  // Following static method is never called thus, no statusCode is set...
  // Check this for details: https://github.com/zeit/next.js#custom-error-handling
  public static getInitialProps(ctx: any) {
    const statusCode = ctx.res ? ctx.res.statusCode : ctx.err ? ctx.err.statusCode : null;
    return { statusCode };
  }

  public render() {
    return <Error404 />;
  }
}

export default Error;
