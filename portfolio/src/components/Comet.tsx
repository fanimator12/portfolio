import comet from "/comet.png";

import { ParallaxLayer } from "@react-spring/parallax";
function Comet() {
    return (
        <ParallaxLayer
            offset={2.9}
            speed={2}
        >
            <img src={comet}
                style={{
                    padding: "10em",
                    float: "right",
                    width: "20em",
                }} />
        </ParallaxLayer>
    );
}

export default Comet;