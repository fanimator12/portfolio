import { Container, Grid, Typography } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect } from "react";
import { getDetails } from "../data/about";
import DeepSpace from "../components/DeepSpace";
function Services() {

  const about = getDetails();

  useEffect(() => {
    document.title = "services | fanimator";
  });

  return (
    <Parallax pages={1}>
      <DeepSpace />

      <ParallaxLayer>
        <Container sx={{ paddingTop: "8em", height: "auto" }}>
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
              }}
            >
              <Container>
                <Grid
                  display="flex"
                  justifyContent="flex-start"
                  flexDirection="row"
                  alignItems="center"
                >
                  <Typography
                    color="#fff"
                    sx={{
                      padding: "20px 0 10px 0",
                      fontSize: "40px",
                      float: "right",
                      fontFamily: "ChakraPetch SemiBold"
                    }}
                  >
                    software development
                  </Typography>
                </Grid>

                <Grid
                  display="flex"
                  justifyContent="flex-start"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Typography
                    color="#7a7a7a"
                    sx={{
                      fontSize: "20px",
                      float: "right",
                      fontFamily: "ChakraPetch Light"
                    }}
                  >
                    frontend - web, UI/UX design
                  </Typography>

                  <Typography
                    color="#7a7a7a"
                    sx={{
                      fontSize: "20px",
                      float: "right",
                      fontFamily: "ChakraPetch Light"
                    }}
                  >
                    backend - API, database management
                  </Typography>

                  <Typography
                    color="#7a7a7a"
                    sx={{
                      fontSize: "20px",
                      float: "right",
                      fontFamily: "ChakraPetch Light"
                    }}
                  >
                    fullstack
                  </Typography>

                  <Typography
                    color="#7a7a7a"
                    sx={{
                      fontSize: "20px",
                      float: "right",
                      fontFamily: "ChakraPetch Light"
                    }}
                  >
                    android apps
                  </Typography>

                  <Typography
                    color="#7a7a7a"
                    sx={{
                      fontSize: "20px",
                      float: "right",
                      fontFamily: "ChakraPetch Light"
                    }}
                  >
                    software design
                  </Typography>
                </Grid>

                <Grid
                  display="flex"
                  justifyContent="flex-start"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Typography
                    color="#fff"
                    sx={{
                      padding: "20px 0 10px 0",
                      fontSize: "40px",
                      float: "right",
                      fontFamily: "ChakraPetch SemiBold"
                    }}
                  >
                    photography
                  </Typography>

                  <Typography
                    color="#7a7a7a"
                    sx={{
                      fontSize: "20px",
                      float: "right",
                      fontFamily: "ChakraPetch Light"
                    }}
                  >
                    artwork
                  </Typography>

                  <Typography
                    color="#7a7a7a"
                    sx={{
                      fontSize: "20px",
                      float: "right",
                      fontFamily: "ChakraPetch Light"
                    }}
                  >
                    fashion
                  </Typography>

                  <Typography
                    color="#7a7a7a"
                    sx={{
                      fontSize: "20px",
                      float: "right",
                      fontFamily: "ChakraPetch Light"
                    }}
                  >
                    portrait
                  </Typography>

                  <Typography
                    color="#7a7a7a"
                    sx={{
                      fontSize: "20px",
                      float: "right",
                      fontFamily: "ChakraPetch Light"
                    }}
                  >
                    events & conferences
                  </Typography>
                </Grid>

                <Grid
                  display="flex"
                  justifyContent="flex-start"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Typography
                    color="#fff"
                    sx={{
                      padding: "20px 0 10px 0",
                      fontSize: "40px",
                      float: "right",
                      fontFamily: "ChakraPetch SemiBold"
                    }}
                  >
                    graphic design
                  </Typography>

                  <Typography
                    color="#7a7a7a"
                    sx={{
                      fontSize: "20px",
                      float: "right",
                      fontFamily: "ChakraPetch Light"
                    }}
                  >
                    logos
                  </Typography>

                  <Typography
                    color="#7a7a7a"
                    sx={{
                      fontSize: "20px",
                      float: "right",
                      fontFamily: "ChakraPetch Light"
                    }}
                  >
                    posters
                  </Typography>

                  <Typography
                    color="#7a7a7a"
                    sx={{
                      fontSize: "20px",
                      float: "right",
                      fontFamily: "ChakraPetch Light"
                    }}
                  >
                    branding
                  </Typography>
                </Grid>
              </Container>

              <Container sx={{ width: { md: "40rem" } }}>
                {about.map(item =>
                  <Grid
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    textAlign="center"
                    justifyContent="center"
                    sx={{
                      padding: "40px 5px 0",
                    }}>
                    <Typography
                      color="#7a7a7a"
                      sx={{ fontSize: "20px", fontFamily: "ChakraPetch Light", paddingRight: "10px" }}
                    >
                      I welcome inquiries about potential ideas or opportunities:
                    </Typography>
                    <Typography
                      className="hover-underline-animation"
                      color="#fff"
                      sx={{
                        fontSize: "20px",
                        fontFamily: "ChakraPetch SemiBold Italic",
                      }}
                    >
                      <a style={{ color: "#fff", textDecoration: "none" }} href={`mailto:${item.email}`} target="_blank">
                        {item.email}
                      </a>
                    </Typography>
                  </Grid>
                )}
              </Container>
            </Container>
          </Container>
        </Container>
      </ParallaxLayer>
    </Parallax>
  );
}

export default Services;