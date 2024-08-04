const url = "/"

const projects = [
    {
        id: 1,
        image: url + "nullcarbon.png",
        title: "Nullcarbon",
        type: "webapp",
        url: "https://app.nullcarbon.dk/sign-in",
        description: "As a student worker, then full-time frontend developer, helped the danish startup company Nullcarbon to establish their product for generating Life Cycle Assessment (LCA) reports for buildings and constructions.",
        technologies: "ReactJS, Typescript, Material UI, Django",
    },
    {
        id: 2,
        image: url + "passmaster.png",
        title: "PassMaster",
        type: "website",
        url: "https://github.com/fanimator12/passmaster/",
        description: "This password manager was implemented for the elective SCP1 - IT Security and Cryptography in Practice course (VIA University College). The project is built mainly on Advanced Encryption Standard (AES) encryption.",
        technologies: "ReactJS, Typescript, Material UI, Python, Fast API, Kubernetes, Docker, JWT, TOTP",
    },
    {
        id: 3,
        image: url + "academictraining.svg",
        title: "CERN Academic Training",
        type: "website",
        url: "https://academictraining-admin.docs.cern.ch/",
        description: "During my Technical Studentship at CERN between 2021-2022, I've designed and built an attractive website to promote CERN's Academic Training seminars, colloquia, and summer student lectures in a coherent way, and easily maintained in the future. The site and the complete documentation can be accessed here: ",
        technologies: "ReactJS, Typescript, Ant Design, Python, Kubernetes, Django",
    },
    {
        id: 4,
        image: url + "bestmovies.png",
        title: "BestMovies",
        type: "website",
        url: "https://best-movies-app.vercel.app/",
        description: "Our sixth-semester university group has created a web-based application for movie enthusiasts. The platform allows users to access information about the film industry, create and save their own movie playlists, and contribute to the industry by sharing their ratings. The site can be accessed through the following link: ",
        technologies: "ReactJS, Typescript, Material UI, .NET, C#, REST API, Azure DevOps, Vercel",
    },
    {
        id: 5,
        image: url + "bucketlist.svg",
        title: "My Bucket List",
        type: "mobile app",
        url: "https://www.youtube.com/watch?v=o-OT6SNeHtc",
        description: "Fourth-semester individual university project centered on managing bucket list objectives. The presentation of this mobile application can be accessed through the following link: ",
        technologies: "Android, Java",
    },
    {
        id: 6,
        image: url + "smartfarm.png",
        title: "SmartFarm",
        type: "mobile app",
        url: "https://www.youtube.com/watch?v=0PO49tOscFI",
        description: "Our forth-semester university group has worked on an indoor farm IoT system that can retrieve, analyze and visualize sensor data. Users can control and observe the measurements of the environmental variables like CO2, humidity, temperature and using an Android application. The presentation of the project can be accessed through the following link: ",
        technologies: "Android, C, Java, Docker, Microsoft Azure, SQL, PowerBI, WebSockets",
    },
    {
        id: 7,
        image: url + "artwebshop.png",
        title: "Art Web Shop",
        type: "website",
        url: "https://www.youtube.com/watch?v=QHBPBrntCOA",
        description: "Our third-semester university group has worked on a web-based system for artists to sell their artworks online. The presentation of the project can be accessed at the provided link: ",
        technologies: "C#, .NET, Java, SQL",
    },
    {
        id: 8,
        image: url + "vikarservice.png",
        title: "Online Vikar Service",
        type: "app",
        url: "https://www.youtube.com/watch?v=FEd1krjfm0g",
        description: "Our university group for second semester has developed a system designed to address the persistent issues facing the Vikar Companies and enhance their outdated hiring processes. The presentation of the project can be accessed at the provided link: ",
        technologies: "Java, JavaFX, PostgreSQL",
    },
];

export function getProjects() {
    return projects;
}

export function getProject(projectId: string) {
    return projects[parseInt(projectId) - 1];
}