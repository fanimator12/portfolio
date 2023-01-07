import { ParallaxLayer } from "@react-spring/parallax";
import mountains from "../photos/3.png";
function Mountains() {
  return (
    <ParallaxLayer
      offset={8}
      speed={1.5}
      style={{
        backgroundImage: `url(${mountains})`,
        backgroundSize: "100%",
        height: "100%",
        top: '32em'
      }}
    ></ParallaxLayer>
  );
}
export default Mountains;