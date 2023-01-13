import nebula from "../photos/nebula.png";

import { ParallaxLayer } from "@react-spring/parallax";
function Nebula() {
    return (
        <ParallaxLayer
            offset={2.6}
            speed={1}
            style={{
                display:"flex",
                justifyContent:"center",
            }}
        >
            <img src={nebula}
                style={{
                    paddingTop:"10em",
                    height: "30em",
                    width: "30em",
                }} />
        </ParallaxLayer>
    );
}

export default Nebula;