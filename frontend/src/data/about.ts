const about = [
  {
    name: "Franciska Török",
    profile: "/profile.JPG",
    age: new Date().getFullYear() - 2000,
    education: [
      {
        school: "VIA University College, Denmark",
        degree: "Bachelor of Engineering in Software Technology",
        year: "2019-2023 (4 years)",
        skills: [
          "Full Scholarship - SU (Statens Uddannelsesstøtte)",
          "OOP, Software Engineering",
          "Advanced Mathematics (Applied Linear Algebra, Stochastis Modelling and Processing, Calculus)",
          "Algorithms and Data Structures",
          "Data Analytics Infrastructure",
          "Database Systems",
          "Networking and Security",
          "Responsive Web Design",
          "Android Development",
          "Machine Learning",
          "IT Security and Cryptography in Practice",
        ],
      },
      {
        school: `"Márton Áron" National College, Romania`,
        degree: "Baccalaureate in Natural Sciences, Biochemistry",
        year: "2016-2019 (3 years)",
        skills: [
          "Staff member of the Student Council",
          "Advanced Biology, Chemistry, Physics and Mathematics",
        ],
      },
      {
        school: `"Nagy István" Art School, Romania`,
        degree: "High School Education focused on Art & Music",
        year: "2015-2016 (1 year)",
        skills: [],
      },
    ],
    biography:
      "I'm a dynamic software engineer, designer, and photographer driven by a passion for cutting-edge technology. At CERN, I excel as a Computing Engineer, and I bring my skills to Nullcarbon as a part-time Full Stack Developer. I specialize in web app development for mobile and desktop, leveraging React, TypeScript, C#, and Python. Armed with a Bachelor's degree in Software Technology from VIA University College in Denmark, I have a proven track record of delivering top-notch solutions. As a native Hungarian from Romania, I speak English, Hungarian & Romanian fluently and am expanding my linguistic horizons with French, Danish, and Brazilian Portuguese. Ready to bring innovation to your project? Reach out at:",
    email: "franciska-leonora.torok@cern.ch",
    skills: [
      "ReactJS",
      "Typescript",
      "HTML & CSS",
      "Git",
      "SQL",
      "PostgreSQL",
      "Java",
      "Python",
      "JavaScript",
      "Linux",
      "Bash",
      "Material UI",
      "Adobe XD",
      "Adobe Photoshop",
      "Adobe Lightroom",
      "Adobe Illustrator",
      "Adobe Premiere Pro",
      "RESTful WebServices",
      "Ant Design",
      "SCRUM",
      "Spring Boot",
      "XML",
      ".NET",
      "C#",
      "C++",
      "C",
      "Android",
      "Unit testing",
      "Node.js",
      "Docker",
      "Kubernetes",
      "Azure DevOps (CI/CD)",
      "Jupyter",
      "Three.js",
      "Vite.js",
    ],
  },
];

export function getDetails() {
  return about;
}