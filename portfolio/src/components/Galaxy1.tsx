import galaxy1 from "../../public/galaxy1.png";

import { ParallaxLayer } from "@react-spring/parallax";
function Galaxy1() {
    return (
        <ParallaxLayer
            offset={0.3}
            speed={1}
        >
            <img src={galaxy1}
                style={{
                    float: "right",
                    width: "40em",
                }} />
        </ParallaxLayer>
    );
}

export default Galaxy1;