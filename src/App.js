import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-size: 2rem;
  font-family: 'Muli';
    color: #E50914;
`;

function App() {
  return (
    <div className="App">
      <StyledHeader><span>to</span>day</StyledHeader>
    </div>
  );
}

export default App;
