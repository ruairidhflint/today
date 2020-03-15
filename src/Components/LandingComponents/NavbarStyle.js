import styled from 'styled-components';

export const StyledNavbar = styled.div`
  width: 100%;
  height: 6rem;
  position: fixed;
  top: 0;
  background-color: white;

  nav {
    max-width: 1250px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;

    .auth-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      width: 13rem;
      font-family: ${props => props.theme.mainFont};
      color: ${props => props.theme.lightText};
      font-size: 1.6rem;

      @media (max-width: 450px) {
        width: 9rem;
        font-size: 1.2rem;
      }

      a {
        text-decoration: none;
        transition: color 0.2s ease-in-out;
        color: inherit;

        :hover {
          color: ${props => props.theme.darkText};
          transition: color 0.2s ease-in-out;
        }
      }
    }
  }
`;
