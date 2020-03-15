// Library Imports
import React from 'react';

// Styling Imports
import { StyledFooter } from './FooterStyle';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <div className="footer-content">
        <a
          href="https://github.com/ruairidhflint/today"
          target="_blank"
          rel="noopener noreferrer"
        >
          ❮❯
        </a>{' '}
        by{' '}
        <a href="https://rory.codes" target="_blank" rel="noopener noreferrer">
          Rory Flint
        </a>{' '}
        {year}
      </div>
    </StyledFooter>
  );
}

export default Footer;
