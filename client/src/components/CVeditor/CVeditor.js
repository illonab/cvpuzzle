import "./CVeditor.scss";
import Contacts from "../resume/Contacts/Contacts";
import ResumeHeader from "../resume/ResumeHeader/ResumeHeader";
import Summary from "../resume/Summary/Summary";
import Skills from "../resume/Skills/Skills";
import Experience from "../resume/Experience/Experience";
import Education from "../resume/Education/Education";
import CertificatesProjects from "../resume/CertificatesProjects/CertificatesProjects";

function CVeditor({ user }) {
  if (!user) {
    return null;
  }
  return (
    <main className="editor">
      <div className="editor__wrapper">
        <div className="editor__template">
          <h1 className="eritor__title">My resume</h1>
          <div className="editor__document resume">
            <ResumeHeader user={user} />
            <Contacts user={user} />
            <Summary />
            <Skills />
            <Experience />
            <Education />
            <CertificatesProjects />
          </div>
        </div>
      </div>
    </main>
  );
}
export default CVeditor;
