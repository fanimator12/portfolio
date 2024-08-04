import orionSpaceShuttle from "/orion-space-shuttle.png";
import Image from "mui-image";
import { Grid } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
function OrionSpaceShuttle() {
    return (
        <ParallaxLayer
            offset={1.9999}
            speed={2}
            style={{
                zIndex: 6,
            }}
        >
            <Grid sx={{
                float: "right",
                width: { xs: "25em", md: "22em" },
                paddingRight: { xs: "10em", md: "40em" },
                paddingTop: { xs: "35em", md: "60em" },
            }} >
                <Image src={orionSpaceShuttle} />
            </Grid>
        </ParallaxLayer>
    );
}

export default OrionSpaceShuttle;