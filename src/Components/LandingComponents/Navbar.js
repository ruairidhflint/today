// Library Imports
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Component Imports
import Logo from '../../Reusables/Logo';

const StyledNavbar = styled.div`
  width: 100%;
  height: 60px;
  nav {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15rem;
    padding-right: 15rem;

    @media (max-width: 800px) {
      padding-left: 5rem;
      padding-right: 5rem;
    }

    @media (max-width: 450px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .auth-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      width: 13rem;
      font-family: ${props => props.theme.mainFont};
      color: ${props => props.theme.lightText};
      font-size: 1.6rem;

      @media (max-width: 450px) {
          width: 10rem;
          font-size: 1.3rem;
      }

      a {
        text-decoration: none;
        transition: color 0.2s ease-in-out;
        color: inherit;

        :hover {
          color: ${props => props.theme.darkText};
          transition: color 0.2s ease-in-out;
        }
      }
    }
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <Logo />
        <div className="auth-buttons">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
