import { useEffect, useRef } from "react";
import "./ResumeHeader.scss";

function ResumeHeader({ onChange, cv }) {
  const nameInput = useRef(null);
  const titleInput = useRef(null);

  const onFieldChange = () => {
    onChange({
      name: nameInput.current.innerText,
      title: titleInput.current.innerText,
    });
  };

  useEffect(() => {
    if (cv.name !== nameInput.current.textContent) {
      nameInput.current.textContent = cv.name;
    }
  }, [cv.name]);

  useEffect(() => {
    if (cv.title !== titleInput.current.textContent) {
      titleInput.current.textContent = cv.title;
    }
  }, [cv.title]);

  return (
    <div className="resume-header">
      <h1
        className="resume-header__name"
        contentEditable
        suppressContentEditableWarning
        onInput={onFieldChange}
        ref={nameInput}
      >
        Your name
      </h1>
      <p
        className="resume-header__position"
        contentEditable
        suppressContentEditableWarning
        onInput={onFieldChange}
        ref={titleInput}
      >
        Position
      </p>
    </div>
  );
}

export default ResumeHeader;
