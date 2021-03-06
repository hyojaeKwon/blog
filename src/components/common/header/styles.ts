import styled from 'styled-components';

interface SProps {
  isScrolled: boolean;
}
export const HeaderContainer = styled.div<SProps>`
  position: fixed;
  z-index: 50;
  max-width: 1000px;
  width: 100%;
  height: 50px;
  padding-top: 1.5rem;
  background-color: white;
  padding-bottom: 1rem;
  border-bottom: ${(props) => (props.isScrolled ? '0.3px solid #dedede' : 'none')};

  justify-content: space-between;
  display: flex;
  align-items: center;

  > .header-nav-container {
    width: fit-content;
    height: 100%;
    display: flex;
    align-items: center;

    /* 로고 부분 */
    > .logo {
      font-size: 3em;
      font-weight: 600;
    }

    /* 네비게이션 부분*/
    > .header-nav {
      font-weight: 500;
      font-size: 1.5em;
      width: 7rem;
      text-align: center;
    }
  }
`;
