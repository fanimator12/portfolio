import galaxy1 from "/galaxy1.png";
import Image from "mui-image";

import { ParallaxLayer } from "@react-spring/parallax";
import { Grid } from "@mui/material";
function Galaxy1() {
    return (
        <ParallaxLayer
            offset={0.5}
            speed={1}
        >
            <Grid sx={{
                    float: "right",
                    width: {
                        xs:"20em",
                        sm:"40em",
                    },
                }} >
                <Image src={galaxy1} />
            </Grid>
        </ParallaxLayer>
    );
}

export default Galaxy1;