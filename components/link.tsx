import React from 'react';

import { Link as MLink } from '@material-ui/core';

export interface ILink {
  external?: boolean;
}

export default function Link(props: any) {
  const { external, ...rest } = props;
  let externalProps = {};
  if (external) {
    externalProps = {
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }
  return <MLink {...externalProps} {...rest} />;
}
