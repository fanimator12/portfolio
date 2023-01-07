import { ParallaxLayer } from "@react-spring/parallax";
import { Button } from "@mui/material";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ScrollToTop from "../components/ScrollToTop";

function Mountains() {
    return (
        <ParallaxLayer
            offset={8}
            speed={1}
        >
            <a href="/">
                <Button style={{ color: "#fff", position: "fixed", bottom: "40px", right: "50px", zIndex: "30" }}>
                    <KeyboardDoubleArrowUpIcon sx={{ fontSize: "100px" }} />
                </Button>
            </a>
        </ParallaxLayer>
    );
}
export default Mountains;