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
            textTransform: "none",
            fontSize: "30px",
            padding: "60px"
          }}
        >
          Additionally, I am excited to share<br/>my unique perspective and style in photography with you. 
        </Typography>
      </div>
    </ParallaxLayer>
  );
}
export default FirstChapter;