import { ParallaxLayer } from "@react-spring/parallax";
import mountains from "../../public/3.png";
function Mountains() {
  return (
    <ParallaxLayer
      offset={9.58}
      speed={1.8}
      style={{
        float: "left",
        backgroundImage: `url(${mountains})`,
        bottom: 0,
        backgroundSize: "100%",
        width: "80%",
        height: "100%",
      }}
    ></ParallaxLayer>
  );
}
export default Mountains;