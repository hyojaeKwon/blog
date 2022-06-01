import { useEffect, useState } from 'react';
import { HeaderContainer } from './styles';

const Header = (): JSX.Element => {
  const [scroll, setScroll] = useState<boolean>(false);

  window.addEventListener('scroll', function (e) {
    if (this.document.documentElement.scrollTop < 20) {
      setScroll(false);
    }
    if (this.document.documentElement.scrollTop >= 20) {
      setScroll(true);
    }
  });

  return (
    <HeaderContainer isScrolled={scroll}>
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
