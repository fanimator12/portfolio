import { Grid } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import castle_picture from "/castlebody.png";

function Castle() {
  return (
    <ParallaxLayer
      offset={9.2}
      factor={5}
      speed={0.3}
      style={{
        backgroundColor: "transparent",
      }}
    >
      <Grid sx={{
        paddingLeft: { sm: "2em", md: "5em", lg: "20em" },
        marginTop: { xs: "-45em", md: "-45em", lg: "-45em", xl: "-2em" }
      }}>
        <img id="castle" src={castle_picture} />
      </Grid>
    </ParallaxLayer>
  );
}

export default Castle;