import { ParallaxLayer } from "@react-spring/parallax";

function DeepSpace() {
  return (
    <ParallaxLayer
      offset={0}
      speed={1}
      factor={6}
      >
      <div className="stars" />
      <div className="twinkling" />
    </ParallaxLayer>
  );
}

export default DeepSpace;