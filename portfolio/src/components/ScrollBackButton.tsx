import { ParallaxLayer } from "@react-spring/parallax";
import { Button } from "@mui/material";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function ScrollBackButton() {
    return (
        <ParallaxLayer
            offset={9}
            speed={1}
            style={{
                zIndex: 0
            }}
        >
            {/* <a href="/">
                <Button sx={{ color: "#fff", position: "fixed", bottom: { xs: "100px", sm: "60px" }, right: { xs: "30px", md: "50px" } }}>
                    <KeyboardDoubleArrowUpIcon sx={{ fontSize: "100px", transition:"0.5s", "&:hover": {fontSize:"120px", transition:"0.5s"} }} />
                </Button>
            </a> */}
        </ParallaxLayer>
    );
}
export default ScrollBackButton;