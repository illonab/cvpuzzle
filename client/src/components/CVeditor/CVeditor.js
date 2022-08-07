import "./CVeditor.scss";
import Contacts from "../resume/Contacts/Contacts";
import ResumeHeader from "../resume/ResumeHeader/ResumeHeader";
import Summary from "../resume/Summary/Summary";
import Skills from "../resume/Skills/Skills";
import Experience from "../resume/Experience/Experience";
import Educations from "../resume/Educations/Educations";
import CertificatesProjects from "../resume/CertificatesProjects/CertificatesProjects";
import { useState } from "react";

function CVeditor({ user }) {
  const [cv, setCV] = useState({
    name: "Your name",
    title: "Position",
    summary: "Summary",
    contacts: {
      location: "Location",
      email: "email",
      phone: "phone",
      socials: [
        "https://www.linkedin.com/in/ilona-beshchuk/",
        "https://github.com/illonab",
      ],
    },
    skills: ["JavaScript", "React"],
    educations: [
      {
        date: "Date",
        location: "Location",
        universityName: "University name",
        universirtDegree: "University degree",
      },
      {
        date: "Date",
        location: "Location",
        universityName: "University name",
        universirtDegree: "University degree",
      },
    ],
    certificatesProjects: [
      {
        certificatesName: "Certificate/project name",
        certificatesLink: "Certificate/project link",
        certificatesCompany: "Company name",
        certificatesDate: "Date",
      },
    ],
    experience: [
      {
        position: "Position",
        companyName: "Company name",
        date: "Date",
        location: "Location",
        responsibilities: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium perspiciatis nesciunt minima facere",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium perspiciatis nesciunt minima facere",
        ],
      },
    ],
  });

  const onHeaderChange = (value) => {
    setCV({ ...cv, name: value.name, title: value.title });
  };

  const onSummaryChange = (value) => {
    setCV({ ...cv, summary: value.summary });
  };

  const onContactsChange = (value) => {
    setCV({
      ...cv,
      contacts: {
        ...cv.contacts,
        location: value.location,
        email: value.email,
        phone: value.phone,
        socials: value.socials,
      },
    });
  };

  const onSkillsChange = (value) => {
    setCV({ ...cv, skills: value.skills });
  };

  const onEducationsChange = (value) => {
    setCV({ ...cv, educations: value.educations });
  };

  const onCertificatesProjectsChange = (certificatesProjects) => {
    setCV({ ...cv, certificatesProjects });
  };

  const onExperiencesChange = (experience) => {
    setCV({ ...cv, experience });
  };

  if (!user) {
    return null;
  }

  return (
    <main className="editor">
      <div className="editor__wrapper">
        <div className="editor__template">
          <h1 className="eritor__title">My resume</h1>
          <div className="editor__document resume">
            <ResumeHeader cv={cv} onChange={onHeaderChange} />
            <Contacts user={user} cv={cv} onChange={onContactsChange} />
            <Summary cv={cv} onChange={onSummaryChange} />
            <Skills skills={cv.skills} onChange={onSkillsChange} />{" "}
            <Experience
              experience={cv.experience}
              onChange={onExperiencesChange}
            />
            <Educations
              educations={cv.educations}
              onChange={onEducationsChange}
            />
            <CertificatesProjects
              certificatesProjects={cv.certificatesProjects}
              onChange={onCertificatesProjectsChange}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
export default CVeditor;
