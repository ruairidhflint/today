import styled from 'styled-components';

export const StyledLogoContainer = styled.div`
  width: 130px;
  display: flex;
  height: 4rem;
  justify-content: center;
  h1 {
    font-size: 3.8rem;
    color: ${props => props.theme.logoText};
    font-family: ${props => props.theme.logoFont};
  }
`;
