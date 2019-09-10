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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  box-sizing: border-box;

  .banner {
    margin-right: 30px;

    .banner-image {
      height: 72px;
    }
  }
`;

const NavWrapper = styled.ul<MyTheme>`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 24px;
  color: ${props => props.theme.colors.white};
`;

const NavLink = styled.li`
  display: inline-block;
  margin-left: 30px;

  & + & {
    margin-right: 0;
  }
`;

export const Nav: React.FC<INavProps> = props => {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper>
      <Anchor className='banner' href={props.bannerUrl} withNextRoute>
        <div className='banner-image'>{props.banner}</div>
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
