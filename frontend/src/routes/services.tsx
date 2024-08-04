import { Container, Grid, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Background3 from "../components/Background3";
import { getDetails } from "../data/about";
import { getServices } from "../data/services";
function Services() {
  const [loading, setLoading] = useState(true);

  const services = getServices();
  const about = getDetails();

  function componentDidMount() {
    setTimeout(function () {
      setLoading(false)
    }.bind(loading), 1000)
  }

  const initLoad = async () => {
    if (services != null && about != null) {
      await getServices();
      await getDetails();
      componentDidMount();
    }
  };

  useEffect(() => {
    initLoad();
    document.title = "services | fanimator";
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
        services !== undefined ? (
          <>
            <Background3 />
            <Container sx={{ padding: "6em 0 6em 0", height: "auto" }}>
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
                  <Container
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                  >
                    <Grid
                      display="flex"
                      justifyContent="flex-start"
                      flexDirection="row"
                      alignItems="center"
                    >
                      <Typography
                        color="#4a4a4a"
                        sx={{
                          fontSize: "20px",
                          float: "right",
                          fontFamily: "ChakraPetch Regular",
                        }}
                      >
                        If you need me, I can do ...
                      </Typography>
                    </Grid>
                    {services.map((service, index) =>
                      <>
                        <Grid
                          display="flex"
                          justifyContent="flex-start"
                          flexDirection="row"
                          alignItems="center"
                        >
                          <Typography
                            color="#fff"
                            sx={{
                              padding: "20px 0 0 0",
                              fontSize: "40px",
                              float: "right",
                              fontFamily: "ChakraPetch SemiBold",
                              transition: "all 0.5s",
                              "&:hover": {
                                fontSize: "45px",
                                transition: "all 0.5s",
                              },
                            }}
                          >
                            {service.title}
                          </Typography>
                        </Grid>

                        <Grid
                          display="flex"
                          justifyContent="flex-start"
                          flexDirection="column"
                          alignItems="flex-start"
                          key={index}
                        >
                          <Typography
                            color="#fff"
                            sx={{
                              fontSize: "20px",
                              float: "right",
                              fontFamily: "ChakraPetch Light",
                            }}
                          >
                            <ul style={{ padding: 0, listStyleType: "none" }}>
                              {service.examples.map((example, i) => (
                                <li key={i}>{example}</li>
                              ))}
                            </ul>
                          </Typography>
                        </Grid>
                      </>
                    )}
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
                          color="#fff"
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

export default Services;