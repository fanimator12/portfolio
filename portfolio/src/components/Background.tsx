import { ParallaxLayer } from "@react-spring/parallax";
import sky from "../photos/0.png";
function Background() {
  return (
    <ParallaxLayer
      offset={1}
      speed={1}
      factor={15}
      style={{
        backgroundImage: `url(${sky})`,
        backgroundSize: 'cover',
        width: '100%',
        marginTop: '20em',
        zIndex: '-1'
      }}>
    </ParallaxLayer>
  );
}

export default Background;