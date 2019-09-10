import { Avatar } from '@ui/avatar';
import { Nav } from '@ui/nav';
import { Typography } from '@ui/typography';
import { navLinks } from '@utils/models/nav-links';
import { theme } from '@utils/theme';
import React from 'react';
import styled, { ThemeProps, withTheme } from 'styled-components';

interface IProfileDetailsHeader {
  theme: ThemeProps<typeof theme>;
}

const TopContainer = styled.div<IProfileDetailsHeader>`
  align-items: center;
  background: ${props => props.theme.colors.blackDark};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 250px;
`;

const BottomContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  .profile-avatar-wrapper {
    position: relative;
    transform: translate(0, -50%);
  }

  .about-wrapper {
    margin-top: -90px;
  }
`;

class CProfileDetailsHeader extends React.Component<IProfileDetailsHeader> {
  public render() {
    return (
      <>
        <TopContainer>
          <Nav
            banner={<img src='/static/images/logo-small.png' alt="Shub's logo" />}
            bannerUrl='/'
            links={navLinks}
          />
        </TopContainer>
        <BottomContainer>
          <div className='profile-avatar-wrapper'>
            <Avatar
              size={200}
              src='/static/images/profile.png'
              bordered
              withShadow
              color='#FFAB00'
            />
          </div>
          <div className='about-wrapper'>
            <Typography type='h1' weight='bold'>
              Subroto Biswas
            </Typography>
          </div>
        </BottomContainer>
      </>
    );
  }
}

export const ProfileDetailsHeader = withTheme(CProfileDetailsHeader);
