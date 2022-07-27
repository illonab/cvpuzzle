import "./Home.scss";
import heroImg from "../../assets/images/hero-img.png";

function Home() {
  return (
    <main>
      <section className="banner">
        <div className="banner__content">
          <h1 className="banner__title">
            Create your professional CV with CvPuzzle
          </h1>
          <p className="banner__text">
            Build your brand-new resume just in a few minutes. Increase your
            interview chances and rise above the competition.
          </p>
          <a href="#" className="banner__btn cta-btn">
            Create my resume
          </a>
        </div>
        <img className="banner__image" src={heroImg} alt="" />
      </section>
      <section className="why-use">
        <div className="why-use__left">
          <div className="why-use__content">
            <h3 className="why-use__title">Corporis voluptates sit</h3>
            <p className="why-use__text">
              Consequuntur sunt aut quasi enim aliquam quae harum pariatur
              laboris nisi ut aliquip
            </p>
          </div>
          <div className="why-use__content">
            <h3 className="why-use__title">Corporis voluptates sit</h3>
            <p className="why-use__text">
              Consequuntur sunt aut quasi enim aliquam quae harum pariatur
              laboris nisi ut aliquip
            </p>
          </div>
        </div>
        <div className="why-use__right">
          <div className="why-use__content">
            <h3 className="why-use__title">Corporis voluptates sit</h3>
            <p className="why-use__text">
              Consequuntur sunt aut quasi enim aliquam quae harum pariatur
              laboris nisi ut aliquip
            </p>
          </div>
          <div className="why-use__content">
            <h3 className="why-use__title">Corporis voluptates sit</h3>
            <p className="why-use__text">
              Consequuntur sunt aut quasi enim aliquam quae harum pariatur
              laboris nisi ut aliquip
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
