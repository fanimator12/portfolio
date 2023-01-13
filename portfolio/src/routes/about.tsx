import { Button, Container, Grid, Typography } from "@mui/material";
import Image from "mui-image";
import { useEffect, useState } from "react";
import { getDetails } from "../data/about";
import EducationStepper from "../components/EducationStepper";
import Background4 from "../components/Background4";

function About() {

  const details = getDetails();

  useEffect(() => {
    document.title = "about | fanimator";
  });

  return (
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
                      color="#fff"
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
                sx={{ padding: "20px 5px 0", zIndex: 5 }}
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
  );
}

export default About;