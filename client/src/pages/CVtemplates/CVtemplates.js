import "./CVtemplates.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ResumeExample from "../../assets/images/cvexample.jpg";
import ResumeExample2 from "../../assets/images/cvexample2.jpg";
import ResumeExample3 from "../../assets/images/cvexample3.jpg";

function CVtemplates() {
  let navigate = useNavigate();

  const getId = async () => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/cvs`, undefined, {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "Access-Control-Credentials": true,
      },
    });
    navigate(`/mycv/editor/${response.data}`, { replace: true });
  };
  return (
    <main className="templates">
      <div className="templates__wrapper">
        <h1 className="templates__title">Resume templates</h1>
        <p className="templates__subheader">
          Choose from a wide variety of unique and professionally designed
          templates and create a CV that stands out from the rest.
        </p>
        <div className="templates__separator"></div>
        <section className="templates__templates">
          <article className="templates__card">
            <div
              className="templates__template"
              to={"/mycv/editor"}
              onClick={getId}
            >
              <h3 className="templates__template-name">Basic</h3>
              <img
                src={ResumeExample}
                alt=""
                className="templates__preview-img"
              />
            </div>
          </article>
          <article className="templates__card">
            <h3 className="templates__template-name">Traditional</h3>
            <p className="templates__template">
              <img
                src={ResumeExample2}
                alt=""
                className="templates__preview-img"
              />
            </p>
          </article>
          <article className="templates__card">
            <h3 className="templates__template-name">Simple</h3>
            <p className="templates__template">
              <img
                src={ResumeExample3}
                alt=""
                className="templates__preview-img"
              />
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}

export default CVtemplates;
