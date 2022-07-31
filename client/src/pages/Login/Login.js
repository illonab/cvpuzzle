import { useEffect } from "react";
import "./Login.scss";
import jwt_decode from "jwt-decode";
import teamImg from "../../assets/images/hero-img.png";
import Google from "../../assets/icon/google-icon.svg";
import Github from "../../assets/icon/github-icon.svg";

function LogIn() {
  const google = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };
  const github = () => {
    window.open("http://localhost:8080/auth/github", "_self");
  };
  // function handleCallbackResponse(response) {
  //   const useObject = jwt_decode(response.credential);
  //   console.log(useObject);
  // }
  // useEffect(() => {
  //   const loginButton = document.querySelector(".login__button");
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id:
  //       "619268617742-kr9km0n6hfc1dr7a6dpviu30id1u4hfm.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //   });
  //   google.accounts.id.renderButton(loginButton, {
  //     theme: "outline",
  //     size: "large",
  //   });
  //   google.accounts.id.prompt();
  // }, []);
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
