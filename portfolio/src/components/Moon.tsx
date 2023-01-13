import moon from "../../public/moon.png";

import { ParallaxLayer } from "@react-spring/parallax";
function Moon() {
    return (
        <ParallaxLayer
            offset={2.9}
            speed={3}
            style={{
                paddingLeft: "50em",
                paddingTop: "20em"
            }}
        >
            <img src={moon}
                style={{
                    width: "20em",
                    transform: "rotate(150deg)",
                }} />
        </ParallaxLayer>
    );
}

export default Moon;