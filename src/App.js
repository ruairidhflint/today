// Library Imports
import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Styling Imports
import { Theme } from './Styles/theme';
import GlobalStyle from './Styles/globalTheme.js';

// Component Imports
import LandingPage from './Views/LandingPage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Route exact path='/' component={LandingPage} />
    </ThemeProvider>
  );
}

export default App;
