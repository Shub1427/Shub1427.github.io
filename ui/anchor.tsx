import { MyTheme } from '@utils/interface';
import Link from 'next/link';
import React from 'react';
import styled, { ThemeProps } from 'styled-components';

export interface IAnchorProps extends MyTheme {
  className?: string;
  highlight?: string;
  href: string;
  withNextRoute?: boolean;
}

// Will use `useMemo` later on...
const CAnchor: React.FC<IAnchorProps> = props => (
  <div className={props.className}>
    {!!props.withNextRoute ? (
      <Link href={props.href}>
        <a>{props.children}</a>
      </Link>
    ) : (
      <a href={props.href}>{props.children}</a>
    )}
    {props.highlight && <div className='highlighter' />}
  </div>
);

export const Anchor = styled(CAnchor)`
  a {
    color: inherit;
    text-decoration: none;
  }
  .highlighter {
    background-color: ${props => props.highlight};
    height: 2px;
    width: 100%;
    margin-top: 3px;
    transform: scale(0, 1);
    transition: transform 0.2s ease-out;
  }

  &:hover {
    .highlighter {
      transform: scale(1, 1);
    }
  }
`;
