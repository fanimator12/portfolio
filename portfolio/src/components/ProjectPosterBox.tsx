import { Box, CardMedia, Grid, Typography } from "@mui/material";
import { ProjectBox } from "../models/ProjectBox";
import { Link as LinkRouter } from "react-router-dom";

const ProjectPosterBox = ({
    id,
    image,
    title,
    url
  }: ProjectBox) => {

    return (
      <Box
        gridColumn="span 3"
        sx={{
          width: "100%",
        }}
      >
        <LinkRouter to={url} key={id}>
          <CardMedia
            component="img"
            className="poster"
            src={image}
            sx={{
              borderRadius: "5px",
              transition: "0.5s",
              objectFit: "cover",
              objectPosition: "center",
              height: { xs: "15em", sm: "20em", md: "25em" },
              "&:hover": {
                transform: "scale(1.02)",
                transition: "all 0.5s",
              },
            }}
          />
        </LinkRouter>
  
{/* TODO if type == photo, don't display the title */}
        <Grid
          xs={12}
          container
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
          sx={{ paddingTop: "12px" }}
        >
          <LinkRouter to={`/person?personId=${id}`} key={id}>
            <Grid>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  width: {
                    xs: "auto",
                    sm: "8em",
                    md: "11em",
                  },
                  fontSize: "1.1em",
                  fontWeight: "bold",
                }}
              >
                {title}
              </Typography>
            </Grid>
          </LinkRouter>
        </Grid>
      </Box>
    );
  };
  
  export default ProjectPosterBox;