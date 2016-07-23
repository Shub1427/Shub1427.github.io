import React from 'react';
import styled from 'styled-components';
import Avatar from '../ui/avatar';
import profileSrc from '../images/profile.png';

const Header = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  padding: 30px;
`;

export default () => {
  return (
    <Header>
      <Avatar size={300} src={profileSrc} bordered color='#FFAB00' />
    </Header>
  );
};
