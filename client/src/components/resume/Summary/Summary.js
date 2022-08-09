import "./Summary.scss";
import { useEffect, useRef } from "react";

function Summary({ onChange, summary, color }) {
  const summaryInput = useRef(null);

  useEffect(() => {
    if (summary !== summaryInput.current.textContent) {
      summaryInput.current.textContent = summary;
    }
  }, [summary]);

  const onFieldChange = () => {
    onChange({
      summary: summaryInput.current.innerText,
    });
  };
  return (
    <div className="summary">
      <h2 className="summary__title cv-subtitle" style={{ color: color }}>
        Profile
      </h2>
      <div
        className="summary__text cv-text"
        contentEditable
        suppressContentEditableWarning
        onInput={onFieldChange}
        ref={summaryInput}
      ></div>
    </div>
  );
}

export default Summary;
