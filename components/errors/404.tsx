/**
 * I appreciate the work and effort done by Alona Shostko.
 * Whose dribble image I am using here for my custom 404 Page not found.
 *
 * Check his work here: https://dribbble.com/shots/6015680-404-Page-not-found-UFO
 */

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Special Elite', serif;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 10px;
  }

  .ufo {
    width: 50%;
    max-width: 800px;
    min-width: 500px;
  }

  .code {
    font-size: 4em;
    margin: 0 0 15px;
  }

  .description {
    font-size: 1.5em;
    margin: 0;
  }
`;

export class Error404 extends React.Component {
  public render() {
    return (
      <Wrapper>
        <div className='ufo'>
          <img
            width='100%'
            src='https://cdn.dribbble.com/users/2046015/screenshots/6015680/08_404.gif'
            alt='ufo gif: https://dribbble.com/shots/6015680-404-Page-not-found-UFO'
          />
        </div>
        <p className='code'>404</p>
        <p className='description'>You are at the wrong place at the wrong time...</p>
      </Wrapper>
    );
  }
}
