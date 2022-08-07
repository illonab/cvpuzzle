import "./Certificate.scss";
import { useEffect, useRef, useState } from "react";
import Subtract from "../../../assets/icon/resume/subtract.svg";

function Certificate({ certificate, onChange, onSubstract }) {
  const [isFocused, setIsFocused] = useState(false);

  const nameInput = useRef(null);
  const linkInput = useRef(null);
  const companyNameInput = useRef(null);
  const dateInput = useRef(null);

  useEffect(() => {
    if (certificate.certificatesName !== nameInput.current.textContent) {
      nameInput.current.textContent = certificate.certificatesName;
    }
  }, [certificate.certificatesName]);

  useEffect(() => {
    if (certificate.certificatesLink !== linkInput.current.textContent) {
      linkInput.current.textContent = certificate.certificatesLink;
    }
  }, [certificate.certificatesLink]);

  useEffect(() => {
    if (
      certificate.certificatesCompany !== companyNameInput.current.textContent
    ) {
      companyNameInput.current.textContent = certificate.certificatesCompany;
    }
  }, [certificate.certificatesCompany]);

  useEffect(() => {
    if (certificate.certificatesDate !== dateInput.current.textContent) {
      dateInput.current.textContent = certificate.certificatesDate;
    }
  }, [certificate.certificatesDate]);

  const onFieldChange = () => {
    onChange({
      certificatesName: nameInput.current.innerText,
      certificatesLink: linkInput.current.innerText,
      certificatesCompany: companyNameInput.current.innerText,
      certificatesDate: dateInput.current.innerText,
    });
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = (e) => {
    if (
      e.relatedTarget === null ||
      !e.relatedTarget.classList.contains("certificate__subtract")
    ) {
      setIsFocused(false);
    }
  };

  return (
    <div className="certificate">
      <p
        className="certificate__name"
        contentEditable
        suppressContentEditableWarning
        onInput={onFieldChange}
        ref={nameInput}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        Project/certificate name
      </p>
      <a
        href="#"
        className="certificate__link"
        contentEditable
        suppressContentEditableWarning
        onInput={onFieldChange}
        ref={linkInput}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        Project/certificate link
      </a>
      <p
        className="certificate__company"
        contentEditable
        suppressContentEditableWarning
        onInput={onFieldChange}
        ref={companyNameInput}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        Company name
      </p>
      <p
        className="certificate__date"
        contentEditable
        suppressContentEditableWarning
        onInput={onFieldChange}
        ref={dateInput}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        Date
      </p>
      {isFocused === true && (
        <div className="certificate__subtract" tabIndex={1}>
          <img
            className="certificate__subtract-img"
            src={Subtract}
            alt="add icon"
            onClick={onSubstract}
          />
        </div>
      )}
    </div>
  );
}

export default Certificate;
