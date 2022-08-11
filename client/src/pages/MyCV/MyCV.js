import "./MyCV.scss";
import Resume from "../../assets/images/resume.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Download from "../../assets/icon/my-cvs/download.svg";
import ShareLink from "../../assets/icon/my-cvs/link.svg";
import Copy from "../../assets/icon/my-cvs/copy.svg";
import Edit from "../../assets/icon/my-cvs/edit-my-cvs.svg";
import Add from "../../assets/icon/my-cvs/add.svg";
import ResumeExample from "../../assets/images/resume-example1.jpg";

function MyCV() {
  const [myCVs, setmyCVs] = useState(null);

  useEffect(() => {
    const getCVs = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/cvs`, {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "Access-Control-Credentials": true,
          },
        });
        if (response.status === 200) {
          setmyCVs(response.data);
        } else {
          throw new Error("No CVs!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCVs();
  }, []);

  return (
    <main className="my-cvs">
      <div className="my-cvs__wrapper">
        <div className="my-cvs__top">
          <h1 className="my-cvs__title">My CVs</h1>

          <Link className="my-cvs__btn cta-btn" to={`/cvtemplates`}>
            <img className="my-cvs__btn-icon" src={Add} alt="Add icon" />
            Create new
          </Link>
        </div>
        <div className="my-cvs__separator"></div>
        <section className="my-cvs__cvs">
          <Loader isActive={myCVs === null} />
          {myCVs !== null &&
            myCVs.map((cvId) => {
              return (
                <article key={cvId} className="my-cvs__card">
                  <Link className="my-cvs__cv" to={`/mycv/editor/${cvId}`}>
                    <img src={ResumeExample} alt="" className="my-cvs__img" />
                  </Link>
                  <div className="my-cvs__settings">
                    <div className="my-cvs__settings__content">
                      <img
                        className="my-cvs__settings-icon"
                        src={Download}
                        alt="Download icon"
                      />
                      <p className="my-cvs__settings-download">Download PDF</p>
                    </div>
                    <div className="my-cvs__settings__content">
                      <img
                        className="my-cvs__settings-icon"
                        src={ShareLink}
                        alt="Share link icon"
                      />
                      <p className="my-cvs__settings-link">Share a link</p>
                    </div>
                    <div className="my-cvs__settings__content">
                      <img
                        className="my-cvs__settings-icon"
                        src={Copy}
                        alt="Share link icon"
                      />
                      <p className="my-cvs__settings-copy">Make a copy</p>
                    </div>
                    <div className="my-cvs__settings__content">
                      <img
                        className="my-cvs__settings-icon"
                        src={Edit}
                        alt="Share link icon"
                      />
                      <p className="my-cvs__settings-delete">Delete</p>
                    </div>
                  </div>
                </article>
              );
            })}
        </section>
      </div>
    </main>
  );
}

export default MyCV;
