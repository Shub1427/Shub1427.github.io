import { Avatar } from '@ui/avatar';
import { theme } from '@utils/theme';
import React from 'react';
import styled, { ThemeProps, withTheme } from 'styled-components';

interface IProfileDetailsHeader {
  theme: ThemeProps<typeof theme>;
}

const StyledContainer = styled.div<IProfileDetailsHeader>`
  align-items: center;
  background: ${props => props.theme.colors.blackDark};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  min-height: 250px;

  .sb-profile-avatar-wrapper {
    position: relative;
    transform: translate(0, 50%);
  }
`;

class CProfileDetailsHeader extends React.Component<IProfileDetailsHeader> {
  public render() {
    return (
      <StyledContainer>
        <div className='sb-profile-avatar-wrapper'>
          <Avatar size={200} src='/static/images/profile.png' bordered withShadow color='#FFAB00' />
        </div>
      </StyledContainer>
    );
  }
}

export const ProfileDetailsHeader = withTheme(CProfileDetailsHeader);
