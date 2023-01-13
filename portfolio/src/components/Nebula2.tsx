import nebula2 from "../photos/nebula2.png";

import { ParallaxLayer } from "@react-spring/parallax";
function Nebula2() {
    return (
        <ParallaxLayer
            offset={1.9999}
            speed={1}
        >
            <img src={nebula2}
                style={{
                    float: "right",
                    paddingRight: "20em",
                    width: "30em",
                }} />
        </ParallaxLayer>
    );
}

export default Nebula2;