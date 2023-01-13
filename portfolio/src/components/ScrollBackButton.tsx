import { ParallaxLayer } from "@react-spring/parallax";
import { Button } from "@mui/material";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function ScrollBackButton() {
    return (
        <ParallaxLayer
            offset={9}
            speed={1}
            style={{
                zIndex: 5
            }}
        >
            <a href="/">
                <Button style={{ color: "#fff", position: "fixed", bottom: "60px", right: "50px", zIndex: "30" }}>
                    <KeyboardDoubleArrowUpIcon sx={{ fontSize: "100px" }} />
                </Button>
            </a>
        </ParallaxLayer>
    );
}
export default ScrollBackButton;