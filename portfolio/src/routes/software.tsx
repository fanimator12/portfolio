import { Container, Grid } from "@mui/material";
import { useEffect } from "react";
import ProjectPosterBox from "../components/ProjectPosterBox";
import { getProjects } from "../data/projects";

function Software() {
    const projects = getProjects();

    useEffect(() => {
        document.title = "software projects | fanimator";
    });

    return (
        <Container sx={{ marginTop: "8em", minHeight: "40em" }}>
            <Grid
                sx={{ marginBottom: "5em" }}
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
    );
}
export default Software;