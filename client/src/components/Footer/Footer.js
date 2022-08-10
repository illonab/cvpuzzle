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
          <div className="footer__socials socials">
            <a href="#" className="socials__social socials__social--twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="socials__social socials__social--facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="socials__social socials__social--instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="socials__social socials__social--linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footer__links">
          <div className="footer__support">
            <h3 className="footer__subtitle">Support</h3>
            <ul>
              <li>
                <a href="#" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__legal">
            <h3 className="footer__subtitle">Legal</h3>
            <ul>
              <li>
                <a href="#" className="footer__link">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__company">
            <h3 className="footer__subtitle">Company</h3>
            <ul>
              <li>
                <a href="#" className="footer__link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Jobs
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
