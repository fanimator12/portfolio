import { CardMedia, Container, Grid, Typography, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import ProjectPosterBox from "../components/ProjectPosterBox";
import { getProjects } from "../data/projects";
import neon from "../videos/neon.mp4";

function Software() {
    const projects = getProjects();

    const [loading, setLoading] = useState(true);

    function componentDidMount() {
        setTimeout(function () {
            setLoading(false)
        }.bind(loading), 1000)
    }

    const initLoad = async () => {
        if (projects != null) {
            await getProjects();
            componentDidMount();
        }
    };

    useEffect(() => {
        initLoad();
        document.title = "software projects | fanimator";
    });

    return (
        <>
            {loading ? (
                <LinearProgress
                    color="secondary"
                    sx={{
                        borderRadius: "5px",
                        width: "60px",
                        height: "2px",
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        margin: "auto",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        alignItems: "center",
                    }}
                />
            ) :
                projects !== undefined ? (
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
                ) : (
                    <Typography
                        color="#fff"
                        sx={{
                            position: "absolute",
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            margin: "auto",
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center",
                        }}
                    >
                        Oops! <br></br> Nothing's here.
                    </Typography>
                )}
        </>
    );
}
export default Software;