import "./CertificatesProjects.scss";
import Certificate from "../../Certificate/Certificate";
import Add from "../../../assets/icon/resume/add.svg";

function CertificatesProjects({ certificatesProjects, onChange }) {
  const onChangeCertificatesProjects = (index, certificateProject) => {
    const changedCertificatesProjects = [...certificatesProjects];
    changedCertificatesProjects[index] = certificateProject;
    onChange(changedCertificatesProjects);
  };

  const addNewCertificate = () => {
    const changedCertificatesProjects = [...certificatesProjects];
    changedCertificatesProjects.push({
      certificatesName: "Certificate/project name",
      certificatesLink: "Certificate/project link",
      certificatesCompany: "Company name",
      certificatesDate: "Date",
    });
    onChange(changedCertificatesProjects);
  };

  const subtractCertificate = (index) => {
    const changedCertificate = [...certificatesProjects];
    changedCertificate.splice(index, 1);
    onChange({
      changedCertificate,
    });
  };

  return (
    <div className="certificates">
      <h2 className="certificates__title cv-subtitle">Certificates/Projects</h2>
      {certificatesProjects.map((certificate, index) => {
        return (
          <Certificate
            key={index}
            certificate={certificate}
            onSubstract={() => {
              subtractCertificate(index);
            }}
            onChange={(certificate) => {
              onChangeCertificatesProjects(index, certificate);
            }}
          />
        );
      })}
      <div className="certificates__add">
        <img
          className="certificates__add-img"
          src={Add}
          alt="add icon"
          onClick={addNewCertificate}
        />
      </div>
    </div>
  );
}

export default CertificatesProjects;
