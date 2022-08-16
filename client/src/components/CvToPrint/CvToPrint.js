import "./CvToPrint.scss";
import Contacts from "../resume/Contacts/Contacts";
import ResumeHeader from "../resume/ResumeHeader/ResumeHeader";
import Summary from "../resume/Summary/Summary";
import Skills from "../resume/Skills/Skills";
import Experience from "../resume/Experience/Experience";
import Educations from "../resume/Educations/Educations";
import CertificatesProjects from "../resume/CertificatesProjects/CertificatesProjects";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CvToPrint() {
  const params = useParams();
  const [cv, setCV] = useState(null);

  useEffect(() => {
    const getCvData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/cvs/${params.id}`,
          {
            withCredentials: true,
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
              "Access-Control-Credentials": true,
            },
          }
        );
        if (response.status === 200) {
          setCV(response.data);
        } else {
          throw new Error("No data!");
        }
      } catch (err) {}
    };
    getCvData();
  }, [params.id]);

  const onBlockChange = (data, pageIndex, index) => {};

  if (!cv) {
    return null;
  }
  return (
    <div className="preview__template">
      {cv.data.map((page, pageIndex) => {
        return (
          <div
            key={pageIndex}
            className="preview__document resume"
            style={{ fontFamily: cv.mainFont }}
          >
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
                    contacts={cvBlock.data}
                    color={cv.mainColor}
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
                    color={cv.mainColor}
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
                    color={cv.mainColor}
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
                    color={cv.mainColor}
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
                    color={cv.mainColor}
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
                    color={cv.mainColor}
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
  );
}
export default CvToPrint;
