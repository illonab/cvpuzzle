import "./EditBlock.scss";
import { useState } from "react";

function EditBlock({ cv, setCV, pageIndex }) {
  const [select, setSelect] = useState("header");

  const onSelectChange = (e) => {
    setSelect(e.target.value);
  };

  const onAddBlock = () => {
    const changedData = [...cv.data];

    if (select === "header") {
      changedData[pageIndex].push({
        type: "ResumeHeader",
        data: { name: "Your name", title: "Position" },
      });
    }

    if (select === "contacts") {
      changedData[pageIndex].push({
        type: "Contacts",
        data: {
          location: "Location",
          email: "email",
          phone: "phone",
          socials: [
            "https://www.linkedin.com/in/ilona-beshchuk/",
            "https://github.com/illonab",
          ],
        },
      });
    }

    if (select === "summary") {
      changedData[pageIndex].push({
        type: "Summary",
        data: "Include summary of your skills and experience in 3-5 sentences.",
      });
    }

    if (select === "skills") {
      changedData[pageIndex].push({
        type: "Skills",
        data: ["JavaScript", "React"],
      });
    }

    if (select === "experience") {
      changedData[pageIndex].push({
        type: "Experience",
        data: [
          {
            position: "Position",
            companyName: "Company name",
            date: "Date",
            location: "Location",
            responsibilities: ["Your responsibility", "Your responsibility"],
          },
        ],
      });
    }

    if (select === "education") {
      changedData[pageIndex].push({
        type: "Educations",
        data: [
          {
            date: "Date",
            location: "Location",
            universityName: "University name",
            universityDegree: "University degree",
          },
          {
            date: "Date",
            location: "Location",
            universityName: "University name",
            universityDegree: "University degree",
          },
        ],
      });
    }

    if (select === "certificates") {
      changedData[pageIndex].push({
        type: "CertificatesProjects",
        data: [
          {
            certificatesName: "Certificate/project name",
            certificatesLink: "Certificate/project link",
            certificatesCompany: "Company name",
            certificatesDate: "Date",
          },
        ],
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
        <div className="edit-block__add-block">
          <p className="edit-block__add-label">Choose block</p>
          <select
            name="block"
            id=""
            className="edit-block__add-block-select"
            onChange={onSelectChange}
          >
            <option value="header">Name and title</option>
            <option value="contacts">Contacts</option>
            <option value="summary">Summary</option>
            <option value="skills">Skills</option>
            <option value="experience">Experience</option>
            <option value="education">Education</option>
            <option value="certificates">Certificates/projects</option>
          </select>{" "}
        </div>{" "}
        <button className="edit-block__add-block-btn" onClick={onAddBlock}>
          Add block
        </button>
        <button className="edit-block__remove-block" onClick={onRemoveBlock}>
          Remove last block
        </button>
      </div>
    </div>
  );
}

export default EditBlock;
