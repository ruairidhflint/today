import styled from 'styled-components';

export const StyledLogoContainer = styled.div`
  width: 130px;
  display: flex;
  height: 4rem;
  justify-content: center;

  a {
    text-decoration: none;
    color: inherit;
  }
  h1 {
    font-size: 3.8rem;
    color: ${props => props.theme.logoText};
    font-family: ${props => props.theme.logoFont};
    opacity: 1;
    transition: opacity 0.2s ease-in-out;

    :hover {
      opacity: 0.8;
      transition: opacity 0.2s ease-in-out;
    }
  }
`;
