import "./EditBlock.scss";
import { useEffect, useState } from "react";

function EditBlock({ cv, setCV, pageIndex }) {
  const [select, setSelect] = useState(null);

  const onSelectChange = (e) => {
    setSelect(e.target.value);
  };

  const onAddBlock = () => {
    const changedData = [...cv.data];

    if (select === "summary") {
      changedData[pageIndex].push({
        type: "Summary",
        data: "Include summary of your skills and experience in 3-5 sentences.",
      });
    }

    setCV({
      ...cv,
      data: changedData,
    });
  };

  const onRemoveBlock = () => {
    const changedData = [...cv.data];
    changedData[pageIndex].pop();
    setCV({
      ...cv,
      data: changedData,
    });
  };
  return (
    <div className="edit-block">
      <div className="edit-block__blocks">
        <select
          name="block"
          id=""
          className="edit-block__select"
          onChange={onSelectChange}
        >
          <option value="header">Name and title</option>
          <option value="contacts">Contacts</option>
          <option value="summary">Summary</option>
          <option value="skills">Skills</option>
          <option value="experience">Experience</option>
          <option value="education">Education</option>
          <option value="certificates">Certificates/projects</option>
        </select>
        <button className="edit-block__add-block" onClick={onAddBlock}>
          Add block
        </button>
        <button className="edit-block__aremove-block" onClick={onRemoveBlock}>
          Remove last block
        </button>
      </div>
    </div>
  );
}

export default EditBlock;
