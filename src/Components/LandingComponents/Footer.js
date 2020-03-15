import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.mainFont};
  color: ${props => props.theme.lightText};
  font-size: 1.5rem;
  a {
    text-decoration: none;
    color: ${props => props.theme.darkText};
  }
`;

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
