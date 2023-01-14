import Image from "mui-image";
import { Grid } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import mountains from "/3.png";
function Mountains() {
  return (
    <ParallaxLayer
      offset={9}
      speed={1.8}
    >
      <Grid sx={{
        float: "left",
        height: "100%",
        marginTop: { xs: "-2em", md: 0 },
        bottom: 0,
      }} >
        <Image src={mountains} />
      </Grid>
    </ParallaxLayer>
  );
}
export default Mountains;