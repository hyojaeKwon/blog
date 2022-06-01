import { HeaderContainer } from './styles';

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
