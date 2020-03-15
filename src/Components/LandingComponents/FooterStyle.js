import styled from 'styled-components';

export const StyledFooter = styled.nav`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.mainFont};
  color: ${props => props.theme.lightText};
  font-size: 1.5rem;
  a {
    text-decoration: none;
    color: ${props => props.theme.darkText};
  }
`;
