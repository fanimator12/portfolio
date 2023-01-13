import { Typography } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
function SecondChapter() {
  return (
    <ParallaxLayer
      offset={2}
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
            padding:"60px"
          }}
        >
          as you can see, <br/> I'm a huge fan of science, physics and astronomy
        </Typography>
      </div>

    </ParallaxLayer>
  );
}
export default SecondChapter;