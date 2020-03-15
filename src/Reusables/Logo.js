import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { StyledLogoContainer } from './LogoStyle';

function Logo() {
  return (
    <StyledLogoContainer>
      <Link to="/">
        <h1>today</h1>
      </Link>
    </StyledLogoContainer>
  );
}

export default Logo;
