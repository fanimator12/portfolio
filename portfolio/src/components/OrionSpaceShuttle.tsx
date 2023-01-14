import orionSpaceShuttle from "/orion-space-shuttle.png";

import { ParallaxLayer } from "@react-spring/parallax";
function OrionSpaceShuttle() {
    return (
        <ParallaxLayer
            offset={1.9999}
            speed={2}
            style={{
                zIndex: 50,
                paddingTop:"60em",
            }}
        >
            <img src={orionSpaceShuttle}
                style={{
                    float:"right",
                    paddingRight:"40em",
                    width: "22em",
                }} />
        </ParallaxLayer>
    );
}

export default OrionSpaceShuttle;