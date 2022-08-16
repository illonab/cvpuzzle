import Header from "./components/Header/Header";
import "./App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import MyCV from "./pages/MyCV/MyCV";
import { useInsertionEffect, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CVteamplates from "./pages/CVtemplates/CVtemplates";
import CVeditor from "./components/CVeditor/CVeditor";
import CvToPrint from "./components/CvToPrint/CvToPrint";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/auth/login/success",
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
          setUser(response.data.user);
        } else {
          throw new Error("authentication has been failed!");
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/cvtoprint/:id" element={<CvToPrint />} />
        <Route
          path="*"
          element={
            <>
              <Header user={user} />
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route
                  path="/login"
                  exact
                  element={user ? <Navigate to="/" /> : <Login />}
                />
                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="/mycv" exact element={<MyCV />} />
                <Route path="/cvtemplates" exact element={<CVteamplates />} />
                <Route
                  path="/mycv/editor/:id"
                  element={<CVeditor user={user} />}
                />
              </Routes>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
