import webb1 from "/webb1.png";
import Image from "mui-image";
import { ParallaxLayer } from "@react-spring/parallax";
import { Grid } from "@mui/material";
function Webb1() {
    return (
        <ParallaxLayer
            offset={0.1}
            speed={1}
        >
            <Grid sx={{
                width: {
                    xs: "10em",
                    sm: "20em",
                    md: "35em",
                },
            }} >
                <Image src={webb1} />
            </Grid>
        </ParallaxLayer>
    );
}

export default Webb1;