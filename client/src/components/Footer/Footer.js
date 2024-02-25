/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Footer.scss";
import logoIcon from "../../assets/icon/puzzle-logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo-socials">
          <Link to={"/"} className="footer__logo">
            <img src={logoIcon} alt="Brainflix logo" className="footer__icon" />
            <span className="footer__logo-text">CvPuzzle</span>
          </Link>
        </div>
        <div className="footer__links">
          <div className="footer__legal">
            <h3 className="footer__subtitle">Legal</h3>
            <ul>
              <li>
                <a href="/privacy" className="footer__link">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
