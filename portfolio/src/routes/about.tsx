import { Button, Container, Grid, Typography } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "mui-image";
import { useEffect, useState } from "react";
import { getDetails } from "../components/about";
import EducationStepper from "../components/EducationStepper";
import lookingUp from "../photos/Franciska_PH-23.png";
import DeepSpace from "../components/DeepSpace";

function About() {

  const details = getDetails();
  const [pages, setPages] = useState<number>();
  const [offset, setOffset] = useState<number>();

  useEffect(() => {
    document.title = "about | fanimator";
    resize();
  });

  function resize() {
    if (window.matchMedia("(min-width: 900px)").matches) {
      setPages(2.5);
      setOffset(2.5);
    } else if (window.matchMedia("(min-width: 600px)").matches) {
      setPages(3);
      setOffset(2.8);
    } else {
      setPages(3.5);
      setOffset(3);
    }
  }

  return (<>
    <Parallax pages={pages!} className="parallax"
    >
      <DeepSpace />
      <Container sx={{ height: "auto", paddingBottom: "5em", zIndex: 2 }}>
        {details.map(about =>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "auto",
            }}
          >
            <ParallaxLayer
              offset={0.15}
              speed={0.2}
              style={{ zIndex: 5 }}>
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: { xs: "column", md: "row" },
                  height: "auto",
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
                        padding: "35px 0 35px 0",
                        fontSize: "70px",
                        float: "right",
                        fontFamily: "ChakraPetch Bold"
                      }}
                    >
                      {about.name}
                    </Typography>
                  </Grid>

                  {about.biography !== null ? (
                    <Grid
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{
                        padding: "5px",
                      }}
                    >
                      <Typography
                        color="#9a9a9a"
                        sx={{
                          fontSize: "20px",
                          fontFamily: "ChakraPetch Light"
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
                      justifyContent="center"
                      sx={{
                        padding: "40px 5px 0",
                      }}>
                      <Typography
                        color="#fff"
                        className="hover-underline-animation"
                        sx={{
                          fontSize: "20px",
                          fontFamily: "ChakraPetch Regular",
                          textAlign: "right"
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
                    color="#fff"
                    sx={{
                      fontSize: "30px",
                      fontFamily: "ChakraPetch Regular",
                    }}
                  >
                    Education
                  </Typography>
                </Grid>

                <Grid
                  sx={{ padding: "40px 5px 0" }}
                >
                  <EducationStepper />
                </Grid>

                <Grid
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="flex-start"
                  sx={{
                    padding: "2rem 0 0 1rem",
                  }}>
                  <Typography
                    color="#fff"
                    sx={{
                      fontSize: "30px",
                      fontFamily: "ChakraPetch Regular",
                    }}
                  >
                    Skill set
                  </Typography>
                </Grid>

                <Grid
                  sx={{ padding: "40px 5px 0", zIndex: 5 }}
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
                            border: "1px solid #7a7a7a",
                            color: "#8a8a8a",
                            textTransform: "none",
                            fontSize: "15px",
                            fontFamily: "ChakraPetch Bold",
                            textAlign: "center",
                            transition: "0.5s",
                            "&:hover": {
                              color: "#fff",
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
            </ParallaxLayer>
          </Container>
        )}
      </Container>

      <ParallaxLayer offset={offset}
        speed={2.5}
        style={{ zIndex: 2 }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-21em",
            position: "relative",
            bottom: 0,
          }}>
          <Grid sx={{ zIndex: 2 }}>
            <img style={{ width: "30em", paddingTop: "25em", bottom: 0 }} src={lookingUp} />
          </Grid>
        </Container>
      </ParallaxLayer>
    </Parallax>
  </>
  );
}

export default About;