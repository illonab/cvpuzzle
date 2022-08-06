import "./Summary.scss";
import { useEffect, useRef } from "react";

function Summary({ user, onChange, cv }) {
  const summaryInput = useRef(null);

  const onFieldChange = () => {
    onChange({
      summary: summaryInput.current.innerText,
    });
  };
  return (
    <div className="summary">
      <h2 className="summary__title cv-subtitle">Profile</h2>
      <div
        className="summary__text cv-text"
        contentEditable
        suppressContentEditableWarning
        onInput={onFieldChange}
        ref={summaryInput}
      >
        Include summary of your skills and experience in 3-5 sentences.
      </div>
    </div>
  );
}

export default Summary;
