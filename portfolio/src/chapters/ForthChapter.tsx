import { Typography } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
function FirstChapter() {
  return (
    <ParallaxLayer
      offset={6.9}
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
          color="#000"
          sx={{
            fontFamily: "Ghibli",
            textTransform: "lowercase",
            fontSize: "50px",
            padding: "60px"
          }}
        >
          I introduce you to my taste in photography too
        </Typography>
      </div>
    </ParallaxLayer>
  );
}
export default FirstChapter;