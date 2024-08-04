import { ParallaxLayer } from "@react-spring/parallax";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Typography } from "@mui/material";
function ScrollDownIcon() {
    return (
        <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center"
            }}>
            <KeyboardArrowDownIcon id="scrolldown" sx={{ fontSize: "5em", color: "#fff" }}></KeyboardArrowDownIcon>
        </ParallaxLayer>
    );
}
export default ScrollDownIcon;