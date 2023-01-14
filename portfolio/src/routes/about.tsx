import { Button, Container, Divider, Grid, LinearProgress, Typography } from "@mui/material";
import Image from "mui-image";
import { useEffect, useState } from "react";
import { getDetails } from "../data/about";
import EducationStepper from "../components/EducationStepper";
import Background4 from "../components/Background4";

function About() {

  const details = getDetails();

  const [loading, setLoading] = useState(true);

  function componentDidMount() {
    setTimeout(function () {
      setLoading(false)
    }.bind(loading), 1000)
  }

  const initLoad = async () => {
    if (details != null) {
      await getDetails();
      componentDidMount();
    }
  }

  useEffect(() => {
    initLoad();
    document.title = "about | fanimator";
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
        details !== undefined ? (
          <>
            <Background4 />
            <Container sx={{ height: "auto", padding: "8em 0 5em 0" }}>
              {details.map(about =>
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
                      height: "auto",
                      zIndex: 50
                    }}
                  >
                    <Grid
                      display="flex"
                      justifyContent="flex-start"
                      flexDirection="row"
                      alignItems="center"
                    >
                      <Image
                        src={about.profile}
                        style={{ height: "30em", width: "20em", borderRadius: "10px" }}
                      />
                    </Grid>

                    <Container sx={{ width: { md: "40rem" } }}>
                      <Grid
                        display="flex"
                        justifyContent="center"
                        flexDirection="row"
                        alignItems="center"
                      >
                        <Typography
                          color="#fff"
                          sx={{
                            padding: "35px 0 0 0",
                            fontSize: { xs: "40px", md: "70px" },
                            float: "right",
                            fontFamily: "ChakraPetch Bold"
                          }}
                        >
                          {about.name}
                        </Typography>
                      </Grid>

                      <Divider className="intro-divider" />

                      {about.biography !== null ? (
                        <Grid
                          display="flex"
                          flexDirection="row"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Typography
                            color="rgba(255, 255, 255, 0.5)"
                            sx={{
                              textAlign: "center",
                              fontSize: {xs:"15px",md:"20px"},
                              fontFamily: "ChakraPetch Light",
                              padding: "20px",
                            }}
                          >
                            {about.biography}
                          </Typography>
                        </Grid>
                      ) : (
                        " "
                      )}

                      {about.email !== null ? (
                        <Grid
                          display="flex"
                          flexDirection="row"
                          alignItems="center"
                          justifyContent="center">
                          <Typography
                            color="#fff"
                            className="hover-underline-animation"
                            sx={{
                              fontSize: {xs:"15px",md:"20px"},
                              fontFamily: "ChakraPetch Regular",
                              padding: { xs: "0 20px 0 20px", md: "10px" },
                            }}
                          >
                            <a style={{ color: "#fff", textDecoration: "none" }} href={`mailto:${about.email}`} target="_blank">
                              {about.email}
                            </a>
                          </Typography>
                        </Grid>
                      ) : (
                        " "
                      )}
                    </Container>
                  </Container>

                  <Container
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      height: "auto",
                      zIndex: 50
                    }}
                  >
                    <Grid
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="flex-start"
                      sx={{
                        padding: "2rem 0 0 1rem",
                      }}>
                      <Typography
                        sx={{
                          color: { xs: "#fff", md: "rgba(255, 255, 255, 0.1)" },
                          textTransform: "uppercase",
                          fontSize: { xs: "40px", md: "60px" },
                          fontFamily: "ChakraPetch SemiBold",
                          transition: "0.5s",
                          "&:hover": {
                            color: "#fff",
                            transition: "0.5s",
                          },
                        }}
                      >
                        Education
                      </Typography>
                    </Grid>

                    <Grid
                      sx={{ padding: "0 0 1rem 0" }}
                    >
                      <EducationStepper />
                    </Grid>

                    <Grid
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="flex-end"
                      sx={{
                        padding: "2rem 1rem 0 1rem",
                      }}>
                      <Typography
                        sx={{
                          color: { xs: "#fff", md: "rgba(255, 255, 255, 0.1)" },
                          textTransform: "uppercase",
                          fontSize: { xs: "40px", md: "60px" },
                          fontFamily: "ChakraPetch SemiBold",
                          transition: "0.5s",
                          "&:hover": {
                            color: "#fff",
                            transition: "0.5s",
                          },
                        }}
                      >
                        Skill set
                      </Typography>
                    </Grid>

                    <Grid
                      sx={{ zIndex: 5, border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "6px", padding: "12px" }}
                      display="grid"
                      gridTemplateColumns={{
                        xs: "repeat(2, 1fr)",
                        sm: "repeat(3, 1fr)",
                        md: "repeat(4, 1fr)",
                        lg: "repeat(6, 1fr)",
                      }}
                      gap={1}
                    >
                      {about.skills !== undefined && about.skills !== null
                        ? about.skills.map((skill) => {
                          return (
                            <Button
                              sx={{
                                border: "1px solid transparent",
                                color: "#fff",
                                textTransform: "none",
                                fontSize: "15px",
                                fontFamily: "ChakraPetch Regular",
                                borderRadius: "12px",
                                textAlign: "center",
                                transition: "0.5s",
                                "&:hover": {
                                  color: "#fff",
                                  border: "1px solid #fff",
                                  borderRadius: "12px",
                                  transition: "0.5s",
                                },
                                "& .MuiTypography": {
                                  padding: "0 5px 0 5px",
                                }
                              }}>
                              {skill}
                            </Button>
                          );
                        })
                        : ""}
                    </Grid>
                  </Container>
                </Container>
              )}
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

export default About;