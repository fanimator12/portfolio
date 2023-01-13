import jamesWebb from "../../public/james-webb.png";

import { ParallaxLayer } from "@react-spring/parallax";
function JamesWebb() {
    return (
        <ParallaxLayer
            offset={3}
            speed={2}
            style={{
                zIndex: 50,
                marginTop:"-50em"
            }}

        >
            <img src={jamesWebb}
                style={{
                    float: "right",
                    paddingRight: "20em",
                    transform: "rotate(330deg)",
                    width: "30em",
                }} />
        </ParallaxLayer>
    );
}

export default JamesWebb;