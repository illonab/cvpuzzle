import "./CVeditor.scss";
import Contacts from "../resume/Contacts/Contacts";
import ResumeHeader from "../resume/ResumeHeader/ResumeHeader";
import Summary from "../resume/Summary/Summary";
import Skills from "../resume/Skills/Skills";
import Experience from "../resume/Experience/Experience";
import Educations from "../resume/Educations/Educations";
import CertificatesProjects from "../resume/CertificatesProjects/CertificatesProjects";
import { useEffect, useState } from "react";
import Delete from "../../assets/icon/delete-page.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { debounce } from "debounce";

const saveCV = debounce(async (cvId, cv) => {
  try {
    const response = await axios.put(`http://localhost:8080/cvs/${cvId}`, cv, {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "Access-Control-Credentials": true,
      },
    });
    if (response.status === 200) {
      console.log("Success");
    }
  } catch (error) {
    console.log(error);
  }
}, 500);

function CVeditor({ user }) {
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
  }, []);

  useEffect(() => {
    if (cv !== null) {
      saveCV(params.id, cv);
    }
  }, [cv, params.id]);

  const onBlockChange = (data, pageIndex, index) => {
    const updatedCV = [...cv];
    updatedCV[pageIndex] = [...updatedCV[pageIndex]];
    updatedCV[pageIndex][index] = { ...updatedCV[pageIndex][index], data };
    setCV(updatedCV);
  };

  const addNewPage = () => {
    setCV([...cv, []]);
  };
  const deletePage = (pageIndex) => {
    const changedCV = [...cv];
    changedCV.splice(pageIndex);
    setCV(changedCV);
  };

  if (!user) {
    return null;
  }
  if (!cv) {
    return null;
  }
  return (
    <main className="editor">
      <div className="editor__wrapper">
        <div className="editor__template">
          <h1 className="eritor__title">My resume</h1>
          {cv.map((page, pageIndex) => {
            return (
              <div key={pageIndex} className="editor__document resume">
                <img
                  className="editor__delete-page"
                  src={Delete}
                  alt="delet page"
                  onClick={() => {
                    deletePage(pageIndex);
                  }}
                />
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
          <div className="editor__add-page" onClick={addNewPage}>
            Add new page
          </div>
        </div>
      </div>
    </main>
  );
}
export default CVeditor;
