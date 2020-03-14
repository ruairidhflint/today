import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
width: 100%;
height: 70vh;
border: 1px solid red;
`

function Footer() {
    return (
        <StyledFooter><h1>Footer</h1></StyledFooter>
    )
}

export default Footer