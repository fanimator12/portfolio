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
        alignItems: "center",
        zIndex: 6,
      }}>
      <div>
        <Typography
          className="title"
          color="rgba(0, 0, 0, 0.5)"
          sx={{
            fontFamily: "Ghibli",
            textTransform: "none",
            fontSize: "30px",
            padding: "60px",
            display: "inline-block",
          }}
        >
          Additionally, I am excited to share<br />my unique perspective and style in <a className="hover-underline-animation3" href="/photography" style={{ color: "rgba(0, 0, 0, 0.8)", textDecoration: "none", fontWeight: "600" }}>
            photography
          </a>{" "} with you.
        </Typography>
      </div>
    </ParallaxLayer>
  );
}
export default FirstChapter;