import "./Header.scss";
import logoIcon from "../../assets/icon/puzzle-logo.svg";
import { Link } from "react-router-dom";
import userIcon from "../../assets/icon/user-icon.svg";

function Header({ user }) {
  const logout = () => {
    window.open(`${process.env.REACT_APP_SERVER_URL}/auth/logout`, "_self");
  };
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__container">
          <Link className="header__link" to={"/"}>
            <img src={logoIcon} alt="Brainflix logo" className="header__icon" />
            <p className="header__logo">CvPuzzle</p>
          </Link>
          {user ? (
            <nav className="header_navigation navigation">
              <Link className="navigation__link" to={"/cvtemplates"}>
                CV Templates
              </Link>
              <Link className="navigation__link" to={"/mycv"}>
                My CVs
              </Link>
              <span className="navigation__link navigation__link--user">
                <img
                  className="navigation__user-icon"
                  src={userIcon}
                  alt="user account icon"
                />
                <div className="navigation__dropdown">
                  <span className="navigation__link navigation__link--username">
                    Hi {user.displayName} !
                  </span>
                  <span
                    className="navigation__link navigation__link--logout"
                    onClick={logout}
                  >
                    Logout
                  </span>
                </div>
              </span>
            </nav>
          ) : (
            <nav className="header_navigation navigation">
              <Link className="navigation__link" to={"/cvtemplates"}>
                CV Templates
              </Link>
              <Link className="navigation__link" to={"/login"}>
                Log in
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
