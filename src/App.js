import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/theme';
import GlobalStyle from './styles/globalTheme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
