import Location from "../../../assets/icon/resume/location.svg";
import Email from "../../../assets/icon/resume/email.svg";
import Phone from "../../../assets/icon/resume/phone.svg";
import Linkedin from "../../../assets/icon/resume/linkedin.svg";
import Stackoverflow from "../../../assets/icon/resume/stackoverflow.svg";
import Github from "../../../assets/icon/resume/github.svg";
import "./Contacts.scss";

function Contacts({ user }) {
  return (
    <div className="resume__contacts contacts">
      <div className="contacts__left">
        <div className="contacts__icon-container">
          <img className="contacts__icon" src={Location} alt="" />
          <p className="contacts__address">City, Country</p>
        </div>
        <div className="contacts__icon-container">
          <img className="contacts__icon" src={Email} alt="" />
          <p className="rcontacts__email">{user.emails[0].value}</p>
        </div>
        <div className="contacts__icon-container">
          <img className="contacts__icon" src={Phone} alt="" />
          <p className="contacts__phone">Phone Number</p>
        </div>
      </div>
      <div className="contacts__contacts--right">
        <div className="contacts__icon-container">
          <img className="contacts__icon" src={Linkedin} alt="" />
          <a className="contacts__link  contacts__link--linkedin">Linkedin</a>
        </div>
        <div className="contacts__icon-container">
          <img className="contacts__icon" src={Github} alt="" />
          <a className="contacts__link contacts__link--github">Github</a>
        </div>
        <div className="contacts__icon-container">
          <img className="contacts__icon" src={Stackoverflow} alt="" />
          <a className="contacts__link contacts__link--stackoverflow">
            Stackoverflow
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
