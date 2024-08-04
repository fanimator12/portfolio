import galaxy2 from "/galaxy2.png";
import Image from "mui-image";
import { ParallaxLayer } from "@react-spring/parallax";
import { Grid } from "@mui/material";
function Galaxy2() {
    return (
        <ParallaxLayer
            offset={1.999}
            speed={1}
        >
            <Grid sx={{
                paddingTop: { xs: "30em", md: "35em" },
                paddingLeft: { xs: 0, md: "15em" },
                width: { xs: "30em", md: "50em" },
                transform: "rotate(40deg)",
            }} >
                <Image src={galaxy2} />
            </Grid>
        </ParallaxLayer>
    );
}

export default Galaxy2;