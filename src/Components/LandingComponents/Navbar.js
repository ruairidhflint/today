// Library Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Component Imports
import Logo from '../../Reusables/Logo';

// Styles
import { StyledNavbar } from './NavbarStyle';

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
