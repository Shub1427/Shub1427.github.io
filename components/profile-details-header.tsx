import { Avatar } from '@ui/avatar';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  align-items: center;
  background: #212121;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 400px;
`;

export class ProfileDetailsHeader extends React.Component {
  public render() {
    return (
      <StyledContainer>
        <Avatar size={200} src='/static/images/profile.png' bordered color='#FFAB00' />
      </StyledContainer>
    );
  }
}
