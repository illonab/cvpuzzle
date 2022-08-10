const cvIntialState = {
  title: "My Resume",
  mainColor: "#4685c6",
  mainFont: "Krub, sans-serif",
  data: [
    [
      {
        type: "ResumeHeader",
        data: { name: "Your name", title: "Position" },
      },
      {
        type: "Contacts",
        data: {
          location: "Location",
          email: "email",
          phone: "phone",
          socials: [
            "https://www.linkedin.com/in/ilona-beshchuk/",
            "https://github.com/illonab",
          ],
        },
      },
      {
        type: "Summary",
        data: "Include summary of your skills and experience in 3-5 sentences.",
      },
      {
        type: "Skills",
        data: ["JavaScript", "React"],
      },
      {
        type: "Experience",
        data: [
          {
            position: "Position",
            companyName: "Company name",
            date: "Date",
            location: "Location",
            responsibilities: ["Your responsibility", "Your responsibility"],
          },
        ],
      },
      {
        type: "Educations",
        data: [
          {
            date: "Date",
            location: "Location",
            universityName: "University name",
            universityDegree: "University degree",
          },
          {
            date: "Date",
            location: "Location",
            universityName: "University name",
            universityDegree: "University degree",
          },
        ],
      },
      {
        type: "CertificatesProjects",
        data: [
          {
            certificatesName: "Certificate/project name",
            certificatesLink: "Certificate/project link",
            certificatesCompany: "Company name",
            certificatesDate: "Date",
          },
        ],
      },
    ],
  ],
};

module.exports = cvIntialState;
