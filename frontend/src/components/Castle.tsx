import { Grid } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import castle_picture from "/castlebody.png";

function Castle() {
  return (
    <ParallaxLayer
      offset={8.6}
      speed={0.3}
      style={{
        backgroundColor: "transparent",
        zIndex: 2
      }}
    >
      <Grid sx={{
        paddingLeft: { sm: "2em", md: "3em", lg: "20em" },
      }}>
        <img id="castle" src={castle_picture} />
      </Grid>
    </ParallaxLayer>
  );
}

export default Castle;