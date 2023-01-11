import { Container, Button, List, Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "mui-image";
import { getProject } from "../components/projects";
import { useParams } from "react-router-dom";
import { Project } from "../models/Project";

function ProjectItem({ project }: { project: Project }) {

    const projectId = project.id;

    useEffect(() => {
        document.title = `${project.title} | fanimator`;
    }, [project]);

    return (
        <>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: { xs: "column", md: "row" },
                    height: "30rem",
                }}
            >
                <Grid
                    display="flex"
                    justifyContent="flex-start"
                    flexDirection="row"
                    alignItems="center"
                >
                    <Image
                        src={project.url}
                        style={{
                            transitionDuration: "500ms",
                            animation:
                                "1500ms cubic-bezier(0.7, 0, 0.6, 1) 0s 1 normal none running materialize",
                            height: "30em",
                            width: "20em",
                            borderRadius: "10px",
                        }}
                    />
                </Grid>

                <Container sx={{ width: { md: "35rem" } }}>
                    <Grid
                        display="flex"
                        justifyContent="center"
                        flexDirection="row"
                        alignItems="center"
                    >
                        <Typography
                            color="#fff"
                            sx={{
                                padding: "35px 0 35px 0",
                                fontSize: "70px",
                                float: "right",
                                fontFamily: "ChakraPetch Bold"
                            }}
                        >
                            {project.title}
                        </Typography>
                    </Grid>
                </Container>
            </Container>
            <Typography
                color="#fff"
                sx={{
                    margin: "auto",
                    padding: "20px",
                    marginTop: { xs: "20em", sm: "17em", md: 0 },
                }}
            >
                {project.description}
            </Typography>
        </>
    );
}

function ProjectPage() {

    const [project, setProject] = useState<any>({});
    let { projectId } = useParams();

    const initLoad = async () => {
        try {
            const results = await getProject(projectId!);
            setProject(results);
        } catch (error) {
            setProject({});
        }
    };

    useEffect(() => {
        initLoad();
    }, [projectId]);

    useEffect(() => {
        document.title = `Project | fanimator`;
    }, [projectId]);

    return (
        <Container
            sx={{
                display: { xs: "block" },
                paddingTop: "10em",
                height: "auto",
                paddingBottom: "5em"
            }}
        >
            <Container
                className="content"
                sx={{ marginTop: "2em", minHeight: "8em" }}
            >
                {project && <ProjectItem project={project} />}
            </Container>
        </Container>
    );
}

export default ProjectPage;
