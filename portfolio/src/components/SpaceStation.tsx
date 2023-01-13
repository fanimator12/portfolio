import spacestation from "../photos/spacestation.png";

import { ParallaxLayer } from "@react-spring/parallax";
function SpaceStation() {
    return (
        <ParallaxLayer
        offset={3}
        speed={2.5}
    >
        <img src={spacestation}
            style={{
                padding: "20em",
                width: "40em",
            }} />
    </ParallaxLayer>
    );
}

export default SpaceStation;