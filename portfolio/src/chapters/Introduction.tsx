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
            fontSize: "50px",
          }}
        >
          fanimator
        </Typography>
        <Divider className="intro-divider" />
        <Typography
          className="title"
          color="rgba(255, 255, 255, 0.2)"
          sx={{
            fontFamily: "Ghibli",
            textTransform: "lowercase",
            fontSize: "20px",
          }}
        >
          Software Engineer and Photographer
        </Typography>
      </div>
    </ParallaxLayer>
  );
}
export default Introduction;