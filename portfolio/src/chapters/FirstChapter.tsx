import { Divider, Typography } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
function FirstChapter() {
  return (
    <ParallaxLayer
      offset={0.999999}
      speed={0.5}
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center"
      }}>
      <div>
        <Typography
          className="title"
          color="#fff"
          sx={{
            fontFamily: "Ghibli",
            textTransform: "none",
            fontSize: { xs: "20px", sm: "30px", md: "50px" },
            padding: "60px"
          }}
        >
          Let me show you around in my world.
        </Typography>
      </div>
    </ParallaxLayer>
  );
}
export default FirstChapter;