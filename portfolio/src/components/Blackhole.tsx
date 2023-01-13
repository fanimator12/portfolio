import blackhole from "../../public/blackhole.png";

import { ParallaxLayer } from "@react-spring/parallax";
function Blackhole() {
    return (
        <ParallaxLayer
            offset={1}
            speed={1.5}
            style={{
                display:"flex",
                justifyContent:"center"
            }}
        >
            <img src={blackhole}
                style={{
                    width: "150em",
                }} />
        </ParallaxLayer>
    );
}

export default Blackhole;