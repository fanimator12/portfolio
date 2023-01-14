import jamesWebb from "/james-webb.png";
import Image from "mui-image";
import { ParallaxLayer } from "@react-spring/parallax";
import { Grid } from "@mui/material";
function JamesWebb() {
    return (
        <ParallaxLayer
            offset={3}
            speed={2}
            style={{
                zIndex: 6,
            }}
        >
            <Grid sx={{
                marginTop: { xs: "-30em", md: "-50em" },
                float: "right",
                width: { xs: "25em", md: "50em" },
                paddingRight: { xs: 0, md: "20em" },
                marginRight: { xs: "-6em" },
                transform: "rotate(330deg)",
            }} >
                <Image src={jamesWebb} />
            </Grid>
        </ParallaxLayer>
    );
}

export default JamesWebb;