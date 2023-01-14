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
          "Advanced Mathematics (Linear Algebra, Calculus)",
          "Algorithms and Data Structures",
          "Machine Learning",
          "Responsive Web Design",
          "Android Development",
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
    biography: "I am Franciska, a multi-disciplinary professional with expertise in software engineering, photography, and graphic design. I am Hungarian, originally from Romania and have a strong foundation in science and art, which I strive to integrate in my work. I am currently completing my studies in Denmark and am eager to take on new opportunities. If you have a project in mind that aligns with my skill set and interests, please do not hesitate to contact me via email:",
    email: "torok.franciska.leonora@gmail.com",
    skills: [
      "React",
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