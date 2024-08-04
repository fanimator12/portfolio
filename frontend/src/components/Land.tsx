import Image from "mui-image";
import { Grid } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import land from "/2.png";
function Land() {
  return (
    <ParallaxLayer
      offset={9}
      speed={2.5}
    >
      <Grid sx={{
        height: "100%",
        bottom: 0,
      }} >
        <Image src={land} />
      </Grid>
    </ParallaxLayer>
  );
}

export default Land;