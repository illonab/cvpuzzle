import { useEffect, useRef } from "react";
import "./ResumeHeader.scss";

function ResumeHeader({ onChange, header }) {
  const nameInput = useRef(null);
  const titleInput = useRef(null);

  const onFieldChange = () => {
    onChange({
      name: nameInput.current.innerText,
      title: titleInput.current.innerText,
    });
  };

  useEffect(() => {
    if (header.name !== nameInput.current.textContent) {
      nameInput.current.textContent = header.name;
    }
  }, [header.name]);

  useEffect(() => {
    if (header.title !== titleInput.current.textContent) {
      titleInput.current.textContent = header.title;
    }
  }, [header.title]);

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
