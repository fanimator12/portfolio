import nebula2 from "/nebula2.png";
import Image from "mui-image";
import { ParallaxLayer } from "@react-spring/parallax";
import { Grid } from "@mui/material";
function Nebula2() {
    return (
        <ParallaxLayer
            offset={1.9999}
            speed={1}
        >
            <Grid sx={{
                float: "right",
                paddingRight: { xs: 0, md: "10em" },
                width: { xs: "15em", md: "40em" },
            }} >
                <Image src={nebula2} />
            </Grid>
        </ParallaxLayer>
    );
}

export default Nebula2;