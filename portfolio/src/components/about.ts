const about = [
    { 
      name: 'Franciska Török', 
      profile: "https://scontent.fbll1-1.fna.fbcdn.net/v/t39.30808-6/324398803_1203609737249792_5412873250970377257_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5T-zeG1ol8IAX-w10KE&tn=BzX-jb831eTpSBl5&_nc_ht=scontent.fbll1-1.fna&oh=00_AfBQspPN7UkKpQLsruRW3y0FKlrd_aqGXbKv6xP6WT1U1w&oe=63BECA38",
      age: new Date().getFullYear() - 2000, 
      degree: "Bachelor of Engineering in Software Technology",
      biography: "I am Franciska, a multi-disciplinary professional with expertise in software engineering, photography, and graphic design. I am Hungarian, originally from Romania and have a strong foundation in science and art, which I strive to integrate in my work. I am currently completing my studies in Denmark and am eager to take on new opportunities. If you have a project in mind that aligns with my skill set and interests, please do not hesitate to contact me via email.",
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
        "Ant Design",
        "Adobe XD",
        "Adobe Photoshop",
        "Adobe Lightroom",
        "Adobe Illustrator",
        "Adobe Premiere Pro",
        "SCRUM",
        "RESTful WebServices",
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