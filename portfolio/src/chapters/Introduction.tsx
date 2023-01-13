import { Typography } from "@mui/material";
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
          Hi there, I'm Fanimator
        </Typography>
        <br></br>
        <Typography
          className="title h1"
          color="#fff"
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