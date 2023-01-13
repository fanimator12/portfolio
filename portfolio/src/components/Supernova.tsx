import supernova from "../photos/supernova.png";

import { ParallaxLayer } from "@react-spring/parallax";
function Supernova() {
    return (
        <ParallaxLayer
            offset={0.8}
            speed={1}
        >
            <img src={supernova}
                style={{
                    width: "60em",
                    paddingLeft: "10em",
                    height: "60em"
                }} />
        </ParallaxLayer>
    );
}

export default Supernova;