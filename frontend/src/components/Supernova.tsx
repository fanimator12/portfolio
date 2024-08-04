import supernova from "/supernova.png";
import Image from "mui-image";
import { ParallaxLayer } from "@react-spring/parallax";
import { Grid } from "@mui/material";
function Supernova() {
    return (
        <ParallaxLayer
            offset={2.8}
            speed={1}
        >
            <Grid sx={{
                width: { xs: "40em", lg: "60em" },
                paddingLeft: { xs: 0, md: "1em", lg: "2em" },
                marginLeft: { xs: "-10em" }
            }} >
                <Image src={supernova} />
            </Grid>
        </ParallaxLayer>
    );
}

export default Supernova;