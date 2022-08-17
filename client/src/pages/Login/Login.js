import "./Login.scss";
import Google from "../../assets/icon/google-icon.svg";
import Github from "../../assets/icon/github-icon.svg";

function LogIn() {
  const google = () => {
    window.open(`${process.env.REACT_APP_SERVER_URL}/auth/google`, "_self");
  };
  const github = () => {
    window.open(`${process.env.REACT_APP_SERVER_URL}/auth/github`, "_self");
  };

  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__content">
          <h2 className="login__sign-in">Log in or sign up</h2>
          <div className="login__button google" onClick={google}>
            <img
              className="login__icon google-icon"
              src={Google}
              alt="google icon"
            />
            <span className="login__inner-text google-text">
              Sign in with Google
            </span>
          </div>

          <div className="login__button github" onClick={github}>
            <img
              className="login__icon github-icon"
              src={Github}
              alt="github icon"
            />
            <span className="login__inner-text github-text">
              Sign in with Github
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
