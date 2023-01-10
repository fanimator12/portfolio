import { ParallaxLayer } from "@react-spring/parallax";
import land from "../photos/2.png";
function Land() {
  return (
    <ParallaxLayer
    offset={9}
      speed={2.5}
      style={{
        backgroundImage: `url(${land})`,
        backgroundSize: "100%",
        height: "100%",
        marginTop:"-10em",
        bottom: 0,
      }}
    >
      <div id="shadow" />
    </ParallaxLayer>
  );
}

export default Land;