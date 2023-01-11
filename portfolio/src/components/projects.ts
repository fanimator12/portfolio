import { Project } from "../models/Project";

const projects = [
    {
        id: 1,
        image: "src/photos/projects/academictraining.svg",
        title: "CERN Academic Training",
        type: "website",
        url: "https://academictraining.cern.ch/",
        description: "Designed and built an attractive website to promote CERN's Academic Training seminars, colloquia, and summer student lectures in a coherent way, and easily maintained in the future. The complete documentation can be visited here: https://academictraining-admin.docs.cern.ch/",
        technologies: "ReactJS, Typescript, Ant Design, Python, Kubernetes, Django",
    },
    {
        id: 2,
        image: "src/photos/projects/bestmovies.png",
        title: "BestMovies",
        type: "website",
        url: "https://best-movies-app.vercel.app/",
        description: "",
        technologies: "ReactJS, Typescript, Material UI, .NET, C#, Azure DevOps, Vercel",
    },
    {
        id: 3,
        image: "src/photos/projects/bucketlist.png",
        title: "My Bucket List",
        type: "mobile app",
        url: "https://www.youtube.com/watch?v=o-OT6SNeHtc&ab_channel=Fanimator",
        description: "",
        technologies: "Android",
    },
    {
        id: 4,
        image: "src/photos/projects/smartfarm.png",
        title: "SmartFarm",
        type: "mobile app",
        url: "https://www.youtube.com/watch?v=0PO49tOscFI&ab_channel=Fanimator",
        description: "Indoor farm IoT system",
        technologies: "Android, C, SQL",
    },
    {
        id: 5,
        image: "src/photos/projects/artwebshop.png",
        title: "Art Web Shop",
        type: "website",
        url: "https://www.youtube.com/watch?v=QHBPBrntCOA&ab_channel=Fanimator",
        description: "",
        technologies: "C#, .NET, Java, SQL",
    },
    {
        id: 6,
        image: "src/photos/projects/vikarservice.png",
        title: "Online Vikar Service",
        type: "app",
        url: "https://www.youtube.com/watch?v=FEd1krjfm0g",
        description: "",
        technologies: "Java, JavaFX, PostgreSQL",
    },
];

export function getProjects() {
    return projects;
}

export function getProject(projectId:string) {
    return projects[parseInt(projectId) - 1];
}