import "./MyCV.scss";
import Resume from "../../assets/images/resume.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MyCV() {
  const [myCVs, setmyCVs] = useState([]);

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
        <h1 className="my-cvs__title">My CVs</h1>

        <section className="my-cvs__cvs">
          {myCVs.map((cvId) => {
            return (
              <Link
                key={cvId}
                className="my-cvs__cv"
                to={`/mycv/editor/${cvId}`}
              >
                <img src={Resume} alt="" className="my-cvs__img" />
              </Link>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default MyCV;
