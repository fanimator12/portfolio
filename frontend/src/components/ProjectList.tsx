import { Project } from "../models/Project";
import ProjectPosterBox from "./ProjectPosterBox";

interface ProjectListProps {
    projects: Project[],
}

const ProjectList = ({ projects }: ProjectListProps) => {

    return (<>{
        projects.map((project: Project) => {
            return (
                <ProjectPosterBox
                    id={project.id}
                    image={project.image}
                    title={project.title}
                    url={project.url}
                    type={project.type}
                    description={project.description}
                    technologies={project.technologies}
                />
            );
        })
    }</>)
}

export default ProjectList;