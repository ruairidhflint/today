import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
width: 100%;
height: 70vh;
border: 1px solid red;
`

function Hero() {
    return (
        <StyledHero><h1>Hero</h1></StyledHero>
    )
}

export default Hero