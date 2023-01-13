import galaxy2 from "../../public/galaxy2.png";

import { ParallaxLayer } from "@react-spring/parallax";
function Galaxy2() {
    return (
        <ParallaxLayer
            offset={1.999}
            speed={1}
            style={{
                paddingTop:"35em",
                paddingLeft: "15em",
            }}
        >
            <img src={galaxy2}
                style={{
                    width: "50em",
                    transform: "rotate(40deg)",
                }} />
        </ParallaxLayer>
    );
}

export default Galaxy2;