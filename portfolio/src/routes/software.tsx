import { CardMedia, Container, Grid } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import ProjectPosterBox from "../components/ProjectPosterBox";
import { getProjects } from "../data/projects";
import neon from "../videos/neon.mp4";

function Software() {
    const projects = getProjects();

    useEffect(() => {
        document.title = "software projects | fanimator";
    });

    return (
        <>
            <div className="full-screen-container">
                <CardMedia
                    component="video"
                    className="backgroundVideo"
                    src={neon}
                    autoPlay
                    muted
                    loop
                />
            </div>

            <Container>
                <Grid
                    sx={{ padding: "8em 0 5em 0" }}
                    display="grid"
                    gridTemplateColumns={{
                        xs: "repeat(3, 1fr)",
                        sm: "repeat(6, 1fr)",
                        md: "repeat(9, 1fr)",
                    }}
                    gap={3}
                >
                    {projects !== null
                        ? projects.map((item) => {
                            return (
                                <ProjectPosterBox
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    type={item.type}
                                    url={item.url}
                                    technologies={item.technologies}
                                    description={item.description}
                                />
                            );
                        })
                        : ""}
                </Grid>
            </Container>
        </>
    );
}
export default Software;