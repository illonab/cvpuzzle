import "./CVtemplates.scss";
import Resume from "../../assets/images/resume.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CVtemplates() {
  let navigate = useNavigate();

  const getId = async () => {
    const response = await axios.post("http://localhost:8080/cvs", undefined, {
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          cupiditate porro quidem tempora possimus consequatur quia nesciunt
          excepturi dolores labore a reiciendis neque iusto voluptates nostrum
          incidunt est, minus qui.
        </p>
        <section className="templates__templates">
          <p
            className="templates__template"
            to={"/mycv/editor"}
            onClick={getId}
          >
            <img src={Resume} alt="" className="templates__preview-img" />
          </p>
          <a href="#" className="templates__template">
            <img src={Resume} alt="" className="templates__preview-img" />
          </a>
          <a href="#" className="templates__template">
            <img src={Resume} alt="" className="templates__preview-img" />
          </a>
        </section>
      </div>
    </main>
  );
}

export default CVtemplates;
