import Location from "../../../assets/icon/resume/location.svg";
import Email from "../../../assets/icon/resume/email.svg";
import Phone from "../../../assets/icon/resume/phone.svg";
import SocialItem from "../../SocialItem/SocialItem";
import "./Contacts.scss";
import { useEffect, useRef } from "react";
import Add from "../../../assets/icon/resume/add.svg";
import filter from "../../../filter.js";

function Contacts({ onChange, contacts, color }) {
  const locationInput = useRef(null);
  const emailInput = useRef(null);
  const phoneInput = useRef(null);

  const onFieldChange = () => {
    onChange({
      location: locationInput.current.innerText,
      email: emailInput.current.innerText,
      phone: phoneInput.current.innerText,
      socials: contacts.socials,
    });
  };

  const onChangeSocial = (index, url) => {
    const changedSocials = [...contacts.socials];
    changedSocials[index] = url;
    onChange({
      location: contacts.location,
      email: contacts.email,
      phone: contacts.phone,
      socials: changedSocials,
    });
  };

  const addNewSocial = () => {
    const changedSocials = [...contacts.socials];
    changedSocials.push("");
    onChange({
      location: contacts.location,
      email: contacts.email,
      phone: contacts.phone,
      socials: changedSocials,
    });
  };
  const subtractSocial = (index) => {
    const changedSocials = [...contacts.socials];
    changedSocials.splice(index, 1);

    onChange({
      location: contacts.location,
      email: contacts.email,
      phone: contacts.phone,
      socials: changedSocials,
    });
  };
  return (
    <div className="contacts">
      <div className="contacts__left">
        <div className="contacts__contact">
          <img className="contacts__icon" src={Location} alt="" />
          <p
            className="contacts__address"
            contentEditable
            suppressContentEditableWarning
            onInput={onFieldChange}
            ref={locationInput}
          >
            City, Country
          </p>
        </div>
        <div className="contacts__contact">
          <img className="contacts__icon" src={Email} alt="" />
          <p
            className="contacts__email"
            contentEditable
            suppressContentEditableWarning
            onInput={onFieldChange}
            ref={emailInput}
          >
            Email
          </p>
        </div>
        <div className="contacts__contact">
          <img className="contacts__icon" src={Phone} alt="" />
          <p
            className="contacts__phone"
            contentEditable
            suppressContentEditableWarning
            onInput={onFieldChange}
            ref={phoneInput}
          >
            Phone Number
          </p>
        </div>
      </div>
      <div className="contacts__socials">
        {contacts.socials.map((social, index) => {
          return (
            <SocialItem
              key={index}
              url={social}
              color={color}
              onSubstract={() => {
                subtractSocial(index);
              }}
              onChange={(url) => onChangeSocial(index, url)}
            />
          );
        })}

        <div className="contacts__add-social">
          <img
            className="contacts__add-social-img"
            src={Add}
            alt="add icon"
            onClick={addNewSocial}
          />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
