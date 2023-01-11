import { Container, Button, List, Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "mui-image";
import { getProjects } from "../components/projects";
import { useSearchParams } from "react-router-dom";
import { Project } from "../models/Project";

function ProjectPage() {

    // const [param] = useSearchParams();
    const projects = getProjects();
    // const [project, setProject] = useState<Project>();
    // const projectId = param.get("projectId");

    // const initLoad = async () => {
    //     if (projectId != null) {
    //       setProject(await getProject(parseInt(projectId)));
    //     } else {
    //       setProject(undefined);
    //     }
    //   };
  
    useEffect(() => {
        projects.map((project: { title: string}) => {
            document.title = `${project.title} | fanimator`;
        });
        // initLoad();
    });

    return (

        <Container
            sx={{
                display: { xs: "block" },
                paddingTop: "10em",
                height: "auto",
                paddingBottom: "5em"
            }}
        >
            {projects.map((project: { title: string, type: string, url: string, image: string, description: string, technologies: string }) => {
                return (
                    <Container
                        className="content"
                        sx={{ marginTop: "2em", minHeight: "8em" }}
                    >
                        <Container
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                height: "auto",
                            }}
                        >
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
                        </Container>
                    </Container>
                );
            })}
        </Container>
    );
}

export default ProjectPage;
