import { Avatar } from '@ui/avatar';
import { Nav } from '@ui/nav';
import { Typography } from '@ui/typography';
import { MyTheme } from '@utils/interface';
import { navLinks } from '@utils/models/nav-links';
import React from 'react';
import styled, { withTheme } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
  background: #f2f2f2;
`;

const Description = styled(Typography)`
  margin-top: 32px;
  max-width: 900px;
`;

class CProfileDetailsHeader extends React.Component<MyTheme> {
  public render() {
    return (
      <Container>
        <img height='100%' src='/static/images/logo-small.png' alt="Shub's logo" />
        <Typography type='h2' weight='bold'>
          Hey! You can call me Subroto Biswas.
        </Typography>
        <Description type='subtitle' className='description'>
          I am always less with words. This site is about my work, not myself and my work defines
          me. I am interested in various kinds of Graphics programming, and am a student by heart.
          Most of my work here reflects my learning and research I am doing in Graphics using Rust
          lang.
        </Description>
      </Container>
    );
  }
}

export const ProfileDetailsHeader = withTheme(CProfileDetailsHeader);
