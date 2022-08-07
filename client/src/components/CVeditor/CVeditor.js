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
  const [cv, setCV] = useState([
    [
      {
        type: "ResumeHeader",
        data: { name: "Your name", title: "Position" },
      },
      {
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
      },
      {
        type: "Summary",
        data: "Include summary of your skills and experience in 3-5 sentences.",
      },
      {
        type: "Skills",
        data: ["JavaScript", "React"],
      },
      {
        type: "Experience",
        data: [
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
      },
      {
        type: "Educations",
        data: [
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
      },
      {
        type: "CertificatesProjects",
        data: [
          {
            certificatesName: "Certificate/project name",
            certificatesLink: "Certificate/project link",
            certificatesCompany: "Company name",
            certificatesDate: "Date",
          },
        ],
      },
    ],
    [
      {
        type: "ResumeHeader",
        data: { name: "Your name2", title: "Position2" },
      },
    ],
  ]);

  const onBlockChange = (data, pageIndex, index) => {
    const updatedCV = [...cv];
    updatedCV[pageIndex] = [...updatedCV[pageIndex]];
    updatedCV[pageIndex][index] = { ...updatedCV[pageIndex][index], data };
    setCV(updatedCV);
  };

  if (!user) {
    return null;
  }

  return (
    <main className="editor">
      <div className="editor__wrapper">
        <div className="editor__template">
          <h1 className="eritor__title">My resume</h1>
          {cv.map((page, pageIndex) => {
            return (
              <div className="editor__document resume">
                {page.map((cvBlock, index) => {
                  if (cvBlock.type === "ResumeHeader") {
                    return (
                      <ResumeHeader
                        key={index}
                        header={cvBlock.data}
                        onChange={(data) => {
                          onBlockChange(data, pageIndex, index);
                        }}
                      />
                    );
                  }
                  if (cvBlock.type === "Contacts") {
                    return (
                      <Contacts
                        key={index}
                        user={user}
                        contacts={cvBlock.data}
                        onChange={(data) => {
                          onBlockChange(data, pageIndex, index);
                        }}
                      />
                    );
                  }
                  if (cvBlock.type === "Summary") {
                    return (
                      <Summary
                        key={index}
                        summary={cvBlock.data}
                        onChange={(data) => {
                          onBlockChange(data, pageIndex, index);
                        }}
                      />
                    );
                  }
                  if (cvBlock.type === "Skills") {
                    return (
                      <Skills
                        key={index}
                        skills={cvBlock.data}
                        onChange={(data) => {
                          onBlockChange(data, pageIndex, index);
                        }}
                      />
                    );
                  }
                  if (cvBlock.type === "Experience") {
                    return (
                      <Experience
                        key={index}
                        experience={cvBlock.data}
                        onChange={(data) => {
                          onBlockChange(data, pageIndex, index);
                        }}
                      />
                    );
                  }

                  if (cvBlock.type === "Educations") {
                    return (
                      <Educations
                        key={index}
                        educations={cvBlock.data}
                        onChange={(data) => {
                          onBlockChange(data, pageIndex, index);
                        }}
                      />
                    );
                  }

                  if (cvBlock.type === "CertificatesProjects") {
                    return (
                      <CertificatesProjects
                        key={index}
                        certificatesProjects={cvBlock.data}
                        onChange={(data) => {
                          onBlockChange(data, pageIndex, index);
                        }}
                      />
                    );
                  }

                  throw new Error(
                    "No component found for block type " + cvBlock.type
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
export default CVeditor;
