import LoaderImg from "../../assets/icon/loader.svg";
import "./Loader.scss";

function Loader({ isActive }) {
  return (
    <div className={`loader ${isActive ? "loader--active" : ""}`}>
      <img className="loader__img" src={LoaderImg} alt="Loading..." />
    </div>
  );
}

export default Loader;
