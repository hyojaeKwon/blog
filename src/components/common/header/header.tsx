import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 50px;
  padding-top: 2rem;
  padding-bottom: 2rem;

  display: flex;
  justify-content: space-between;
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

const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <div className="header-nav-container">
        <div className="logo">HanA</div>
      </div>
      <div className="header-nav-container">
        <div className="header-nav">Tags</div>
        <div className="header-nav">Projects</div>
        <div className="header-nav">About</div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
