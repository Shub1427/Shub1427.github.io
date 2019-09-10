import { MyTheme } from '@utils/interface';
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Anchor } from './anchor';

export interface ILink {
  label: string;
  url: string;
  newTab: boolean;
}

export interface INavProps extends Partial<MyTheme> {
  banner: React.ReactElement;
  bannerUrl: string;
  links: ILink[];
}
const Wrapper = styled.div`
  display: flex;

  .banner {
    margin-right: 60px;
  }
`;

const NavWrapper = styled.ul<MyTheme>`
  list-style: none;
  margin: 0;
  padding: 15px;
  font-size: 24px;
  color: ${props => props.theme.colors.white};
`;

const NavLink = styled.li`
  display: inline-block;
  margin-right: 30px;
`;

export const Nav: React.FC<INavProps> = props => {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper>
      <Anchor className='banner' href={props.bannerUrl} withNextRoute>
        <div style={{ height: 32 }}>{props.banner}</div>
      </Anchor>
      <NavWrapper theme={theme}>
        {props.links.map(link => (
          <NavLink key={link.label}>
            <Anchor href={link.url} highlight='#f2f2f2' withNextRoute={!link.newTab}>
              {link.label}
            </Anchor>
          </NavLink>
        ))}
      </NavWrapper>
    </Wrapper>
  );
};
