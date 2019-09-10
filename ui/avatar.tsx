import styled, { css } from 'styled-components';

export interface IAvatarProps {
  bordered?: boolean;
  color: string;
  size: number;
  src: string;
}

export const Avatar = styled.div<IAvatarProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size}px;
  background-image: url("${props => props.src}");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  ${props =>
    props.bordered &&
    css`
      border: 3px solid ${props.color};
    `}
`;
