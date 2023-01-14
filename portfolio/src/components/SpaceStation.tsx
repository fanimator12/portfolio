import spacestation from "/spacestation.png";
import Image from "mui-image";
import { Grid } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
function SpaceStation() {
    return (
        <ParallaxLayer
            offset={3}
            speed={2.5}
        >
            <Grid sx={{
                width: { xs: "35em", md: "40em" },
                padding: { xs: "2em", md: 0 },
                paddingTop: { xs: "20em" },
                marginLeft: { xs: "-6em", md: 0 }
            }} >
                <Image src={spacestation} />
            </Grid>
        </ParallaxLayer>
    );
}

export default SpaceStation;