import { ParallaxLayer } from "@react-spring/parallax";
import castle_picture from "../../public/castlebody.png";

function Castle() {
  return (
    <ParallaxLayer
      offset={9.2}
      factor={5}
      speed={0.3}
      style={{
        backgroundColor: "transparent",
      }}
    >
        <img id="castle" src={castle_picture} />
    </ParallaxLayer>
  );
}

export default Castle;