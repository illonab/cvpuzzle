import "./CVeditor.scss";
import Contacts from "../resume/Contacts/Contacts";
import ResumeHeader from "../resume/ResumeHeader/ResumeHeader";
import Summary from "../resume/Summary/Summary";
import Skills from "../resume/Skills/Skills";
import Experience from "../resume/Experience/Experience";
import Educations from "../resume/Educations/Educations";
import CertificatesProjects from "../resume/CertificatesProjects/CertificatesProjects";
import { Fragment, useEffect, useState } from "react";
import Delete from "../../assets/icon/delete-page.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { debounce } from "debounce";
import EditorPanel from "../EditorPanel/EditorPanel";
import EditBlock from "../EditBlock/EditBlock";
import Loader from "../Loader/Loader";

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
    const updatedData = [...cv.data];
    updatedData[pageIndex] = [...updatedData[pageIndex]];
    updatedData[pageIndex][index] = { ...updatedData[pageIndex][index], data };
    setCV({ ...cv, data: updatedData });
  };

  const addNewPage = () => {
    setCV({
      ...cv,
      data: [...cv.data, []],
    });
  };
  const deletePage = (pageIndex) => {
    const changedData = [...cv.data];
    changedData.splice(pageIndex);
    setCV({ ...cv, data: changedData });
  };

  if (!user) {
    return null;
  }

  return (
    <main className="editor">
      <div className="editor__wrapper">
        <Loader isActive={cv === null} />
        {cv !== null && (
          <>
            <h1 className="editor__title">My resume</h1>
            <div className="editor__separator"></div>
            <EditorPanel cvId={params.id} cv={cv} setCV={setCV} />
            <div className="editor__template">
              {cv.data.map((page, pageIndex) => {
                return (
                  <Fragment key={pageIndex}>
                    <div
                      className="editor__document resume"
                      style={{ fontFamily: cv.mainFont }}
                    >
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
                    <EditBlock cv={cv} pageIndex={pageIndex} setCV={setCV} />
                  </Fragment>
                );
              })}
              <div className="editor__add-page" onClick={addNewPage}>
                Add new page
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
export default CVeditor;
