import "./Header.scss";
import logoIcon from "../../assets/icon/puzzle-logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__container">
          <a href="" className="header__link">
            <p className="header__logo">CvPuzzle</p>
            <img src={logoIcon} alt="Brainflix logo" className="header__icon" />
          </a>
          <nav className="header_navigation navigation">
            <a href="#" className="navigation__link">
              CV Templates
            </a>
            <a href="#" className="navigation__link">
              My CVs
            </a>
            <a href="#" className="navigation__link">
              Log in
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
