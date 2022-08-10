import "./Home.scss";
import heroImg from "../../assets/images/hero-img.png";
import Resume from "../../assets/icon/why-we/resume.svg";
import Lock from "../../assets/icon/why-we/lock.svg";
import Edit from "../../assets/icon/why-we/edit.svg";
import Download from "../../assets/icon/why-we/download.svg";
import { Fade } from "react-awesome-reveal";
import TemplateImg from "../../assets/images/resume.png";
import FeaturesImg from "../../assets/images/features.png";
import FeaturesImg2 from "../../assets/images/features-2.png";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
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

            <Link to={`/cvtemplates`} className="banner__btn cta-btn">
              Create my resume
            </Link>
          </div>
          <img className="banner__image" src={heroImg} alt="" />
        </section>
        <Fade direction="up" triggerOnce duration={1000}>
          <section className="why-use">
            <h2 className="why-use__main-title">Why Use CvPuzzle?</h2>
            <div className="why-use__main">
              <div className="why-use__row">
                <div className="why-use__container">
                  <div className="why-use__icon-container">
                    <img
                      className="why-use__icon"
                      src={Resume}
                      alt="resume icon"
                    />
                  </div>
                  <div className="why-use__content">
                    <h3 className="why-use__title">Create resume with ease</h3>
                    <p className="why-use__text">
                      Build your resume online in minutes without even leaving
                      your web browser.
                    </p>
                  </div>
                </div>
                <div className="why-use__container">
                  <img className="why-use__icon" src={Lock} alt="resume icon" />
                  <div className="why-use__content">
                    <h3 className="why-use__title">We care about your data</h3>
                    <p className="why-use__text">
                      Anything you share with us is well protected with our
                      256-bit SSL encryption.
                    </p>
                  </div>
                </div>
              </div>
              <div className="why-use__row">
                <div className="why-use__container">
                  <img className="why-use__icon" src={Edit} alt="edit icon" />
                  <div className="why-use__content">
                    <h3 className="why-use__title">
                      Edit Your Resume in Real Time
                    </h3>
                    <p className="why-use__text">
                      As you edit your resume with our builder, you’ll
                      immediately see the changes applied to your document.
                    </p>
                  </div>
                </div>
                <div className="why-use__container">
                  <img
                    className="why-use__icon"
                    src={Download}
                    alt="edit icon"
                  />
                  <div className="why-use__content">
                    <h3 className="why-use__title">Download as PDF</h3>
                    <p className="why-use__text">
                      Download your resume in PDF and other common formats with
                      just a click.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <section className="our-templates">
          <div className="our-templates__wrapper">
            <h2 className="our-templates__main-title">
              Our Beautiful Templates
            </h2>
            <div className="our-templates__templates">
              <Fade direction="left" triggerOnce duration={500}>
                <div className="our-templates__template">
                  <h3 className="our-templates__secondary-title">Basic</h3>
                  <img
                    src={TemplateImg}
                    className="our-templates__preview-image"
                    alt="Basic template preview"
                  />
                </div>
              </Fade>
              <Fade direction="right" triggerOnce duration={500}>
                <div className="our-templates__template">
                  <h3 className="our-templates__secondary-title">
                    Traditional
                  </h3>
                  <img
                    src={TemplateImg}
                    className="our-templates__preview-image"
                    alt="Traditional template preview"
                  />
                </div>
              </Fade>
            </div>
          </div>
        </section>
        <section className="article">
          <div className="article__wrapper">
            <div className="article__media">
              <img
                src={FeaturesImg}
                className="article__preview-image"
                alt="Every Great Career Begins with a Solid Resume"
              />
            </div>
            <Fade direction="right" triggerOnce duration={1000}>
              <div className="article__text-block">
                <h2 className="article__main-title">
                  Every Great Career Begins with a Solid Resume
                </h2>
                <div>
                  <p className="article__text">
                    Before you ever step foot in a HR recruiter's office to
                    interview for that dream job, your resume is the first thing
                    that crosses their desk.
                  </p>
                  <p className="article__text">
                    Because they can't meet you firsthand to witness your witty
                    personality, focused, driven work ethic, and ability to fit
                    in well with any team, your resume has to do the talking for
                    you.
                    <br />
                    That's why it's essential that your resume properly
                    expresses who you are, what you bring to the table, and why
                    they should immediately pick up the phone and get you in the
                    building.
                    <br />
                    With ResumeCat you can be sure that your resume isn't just
                    being added to the pile; but that it stands out and makes
                    recruiters take notice.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </section>
        <section className="article article--darker-bg">
          <div className="article__wrapper">
            <Fade direction="left" triggerOnce duration={1000}>
              <div className="article__text-block">
                <h2 className="article__main-title">
                  Make the Most of Your First Impression
                </h2>
                <div>
                  <p className="article__text">
                    Six seconds. That's the average time recruiters spend
                    looking at your resume. Especially in those high-powered
                    jobs where hundreds of people are applying.
                  </p>
                  <p className="article__text">
                    ResumeCat provides the support you need to create, format,
                    and prepare your resume like a professional, so you can make
                    every one of those seconds count. From white space to
                    columns to easy-to-read titles and sections our tools can
                    ensure you can fit your talents and aptitudes into each
                    section with precision. More importantly, it's fast, easy,
                    and helps prepare you for your new career.
                  </p>
                </div>
              </div>
            </Fade>
            <div className="article__media">
              <img
                src={FeaturesImg2}
                className="article__preview-image"
                alt="Every Great Career Begins with a Solid Resume"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
