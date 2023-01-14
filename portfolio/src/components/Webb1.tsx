import webb1 from "/webb1.png";

import { ParallaxLayer } from "@react-spring/parallax";
function Webb1() {
    return (

        <ParallaxLayer
            offset={0.1}
            speed={1}
        >
            <img src={webb1}
                style={{
                    width: "35em",
                }} />
        </ParallaxLayer>
    );
}

export default Webb1;