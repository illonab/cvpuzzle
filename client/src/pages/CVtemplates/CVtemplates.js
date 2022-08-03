import "./CVtemplates.scss";
import Resume from "../../assets/images/resume.png";
import { Link } from "react-router-dom";

function CVtemplates() {
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
          <Link className="templates__template" to={"/mycv/editor"}>
            <img src={Resume} alt="" className="templates__preview-img" />
          </Link>
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
