import nebula from "/nebula.png";
import Image from "mui-image";
import { Grid } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
function Nebula() {
    return (
        <ParallaxLayer
            offset={2.6}
            speed={1}
            style={{
                display: "flex",
                justifyContent: "flex-end",
            }}
        >
            <Grid sx={{
                width: { xs: "12em", md: "30em" },
                paddingRight: { xs: "1em", md: "10em" },
                paddingTop: { xs: 0, md: "10em" },
                height: { xs: "12em", md: "30em" },
                marginRight: { xs: "-4em" }
            }} >
                <Image src={nebula} />
            </Grid>
        </ParallaxLayer>
    );
}

export default Nebula;