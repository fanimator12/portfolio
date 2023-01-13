import { Typography } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
function SecondChapter() {
  return (
    <ParallaxLayer
      offset={2.9}
      speed={0.5}
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        marginTop:"20em"
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
          as well as engineering & technology
        </Typography>
      </div>

    </ParallaxLayer>
  );
}
export default SecondChapter;