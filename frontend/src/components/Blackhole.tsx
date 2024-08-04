import blackhole from "/blackhole.png";
import Image from "mui-image";
import { Grid } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
function Blackhole() {
    return (
        <ParallaxLayer
            offset={1}
            speed={1.5}
            style={{
                display: "flex",
                justifyContent: "center"
            }}
        >
            <Grid sx={{
                width: "150em",
            }} >
                <Image src={blackhole} />
            </Grid>
        </ParallaxLayer>
    );
}

export default Blackhole;