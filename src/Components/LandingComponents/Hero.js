import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  width: 100%;
  height: 70vh;
  margin-top: 6rem;
`;

const StyledHeroContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  height: 100%;
  background-color: yellow;
`;

function Hero() {
  return (
    <StyledHero>
      <StyledHeroContainer>
          <div className="left">
              <h2>Test</h2>
          </div>
          <div className="right"></div>
      </StyledHeroContainer>
    </StyledHero>
  );
}

export default Hero;
