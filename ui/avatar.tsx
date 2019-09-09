import styled, { css } from 'styled-components';

export const Avatar = styled.div`
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
