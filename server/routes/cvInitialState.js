const cvIntialState = {
  title: "My Resume",
  mainColor: "#000",
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
            responsibilities: [
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium perspiciatis nesciunt minima facere",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium perspiciatis nesciunt minima facere",
            ],
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
            universirtDegree: "University degree",
          },
          {
            date: "Date",
            location: "Location",
            universityName: "University name",
            universirtDegree: "University degree",
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
