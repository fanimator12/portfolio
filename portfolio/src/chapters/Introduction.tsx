import { Divider, Typography } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import about from "../routes/about";
function Introduction() {
  return (
    <ParallaxLayer
      offset={0}
      speed={0.5}
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}>
      <div>
        <Typography
          className="title"
          color="#fff"
          sx={{
            fontFamily: "Ghibli",
            textTransform: "lowercase",
            fontSize:{
              xs:"30px",
              md:"50px"
            },
          }}
        >
          fanimator
        </Typography>
        <Divider className="intro-divider" />
        <Typography
          className="title"
          sx={{
            color:{
              xs:"rgba(255, 255, 255, 1)",
              md:"rgba(255, 255, 255, 0.2)"
            },
            fontFamily: "Ghibli",
            textTransform: "lowercase",
            fontSize:{
              xs:"15px",
              md:"20px"
            },
          }}
        >
          Software Engineer and Photographer
        </Typography>
      </div>
    </ParallaxLayer>
  );
}
export default Introduction;