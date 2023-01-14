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
            textTransform: "none",
            fontSize: { xs: "20px", md: "30px" },
            padding: "60px"
          }}
        >
          I have a strong passion for<br />science, physics, and astronomy,
        </Typography>
      </div>

    </ParallaxLayer>
  );
}
export default SecondChapter;