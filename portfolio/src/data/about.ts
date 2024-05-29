const about = [
  {
    name: 'Franciska Török',
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
          "IT Security and Cryptography in Practice"
        ]
      },
      {
        school: `"Márton Áron" National College, Romania`,
        degree: "Baccalaureate in Natural Sciences, Biochemistry",
        year: "2016-2019 (3 years)",
        skills: [
          "Staff member of the Student Council",
          "Advanced Biology, Chemistry, Physics and Mathematics"
        ]
      },
      {
        school: `"Nagy István" Art School, Romania`,
        degree: "High School Education focused on Art & Music",
        year: "2015-2016 (1 year)",
        skills: []
      }
    ],
    biography: "I am a multidisciplinary software engineer and photographer with a strong desire to learn and advance my skills in cutting-edge technologies. I specialize in web application development for mobile and desktop platforms, and have experience working with a wide range of technologies including React, Typescript, C# and Python. I have a proven track record of successfully delivering quality work. I am currently completing my Bachelor's degree in Software Technology at VIA University College in Denmark. As a native Hungarian from Romania, I also possess proficiency in English. I am also in the process of expanding my language skills by studying French and Danish. If you have a project that aligns with my skill set and interests, please do not hesitate to contact me at: ",
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
      "Vite.js"
    ]
  }
];

export function getDetails() {
  return about;
}