import { Box, CardMedia, Grid, Typography } from "@mui/material";
import { ProjectBox } from "../models/ProjectBox";
import { Link as LinkRouter } from "react-router-dom";

const ProjectPosterBox = ({
  id,
  image,
  title,
  type,
}: ProjectBox) => {

  return (
    <Box
      gridColumn="span 3"
      sx={{
        width: "100%",
        zIndex: 5
      }}
    >
      <Grid
        xs={12}
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
         <LinkRouter to={`/software-projects/${id}`} key={id}>
        <CardMedia
          component="img"
          src={image!}
          sx={{
            borderRadius: "10px",
            transition: "0.5s",
            objectFit: "cover",
            objectPosition: "center",
            height: "15em",
            width: "15em",
            "&:hover": {
              transform: "scale(1.05)",
              transition: "all 0.5s",
            },
          }}
        />
      </LinkRouter>

        <LinkRouter to={`/software-projects/${id}`} key={id} style={{textDecoration:"none"}}>
          <Grid sx={{paddingTop:"18px"}}>
            <Typography
              color="#fff"
              sx={{
                fontSize: "25px",
                fontFamily: "ChakraPetch Bold",
                textAlign: "center",
              }}
            >
              {title}
            </Typography>
            <Typography
              color="#fff"
              sx={{
                fontSize: "18px",
                fontFamily: "ChakraPetch Light",
                textAlign: "center",
              }}
            >
              {type}
            </Typography>
          </Grid>
        </LinkRouter>
      </Grid>
    </Box>
  );
};

export default ProjectPosterBox;