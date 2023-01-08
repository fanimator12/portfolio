import { Container, Grid, Box, Typography, Divider, CardMedia } from "@mui/material";
import { useEffect } from "react";

function Projects() {
 
  useEffect(() => {
    document.title = "projects | fanimator";
  });

    return (
      <Container
      sx={{
        display: { xs: "block" },
        borderRadius: "30px",
        paddingTop: "8em", 
        height: "auto"
      }}
    >
      <Grid container>
        <Box
          sx={{
            display: { xs: "flex" },
            width: "100%",
            height: "auto",
          }}
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
              software projects
            </Typography>
          <Divider />
        </Box>
      </Grid>

      <Grid container sx={{ padding: "2em", marginTop: "5em" }}>
          <Grid
            item
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(3, 1fr)",
              sm: "repeat(6, 1fr)",
              md: "repeat(9, 1fr)",
              lg: "repeat(12, 1fr)",
            }}
            gap={3}
          >
            <CardMedia />
          </Grid>
      </Grid>

      <Grid container>
        <Box
          sx={{
            display: { xs: "flex" },
            width: "100%",
            height: "auto",
          }}
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
          <Divider />
        </Box>
      </Grid>

      <Grid container sx={{ padding: "2em", marginTop: "5em" }}>
          <Grid
            item
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(3, 1fr)",
              sm: "repeat(6, 1fr)",
              md: "repeat(9, 1fr)",
              lg: "repeat(12, 1fr)",
            }}
            gap={3}
          >
            <CardMedia />
          </Grid>
      </Grid>

      <Grid container>
        <Box
          sx={{
            display: { xs: "flex" },
            width: "100%",
            height: "auto",
          }}
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
          <Divider />
        </Box>
      </Grid>

      <Grid container sx={{ padding: "2em", marginTop: "5em" }}>
          <Grid
            item
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(3, 1fr)",
              sm: "repeat(6, 1fr)",
              md: "repeat(9, 1fr)",
              lg: "repeat(12, 1fr)",
            }}
            gap={3}
          >
            <CardMedia />
          </Grid>
      </Grid>
    </Container>
    );
  }
   
export default Projects;