import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
width: 100%;
height: 70vh;
border: 1px solid red;
`

function About() {
    return (
        <StyledAbout><h1>About</h1></StyledAbout>
    )
}

export default About