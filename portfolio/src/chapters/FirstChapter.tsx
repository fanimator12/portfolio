import { ParallaxLayer } from "@react-spring/parallax";
function FirstChapter() {
  return (
    <ParallaxLayer
      offset={1}
      speed={0.5}
      >
      <div className="title">
        <h1>Let me show you around in my world</h1>
      </div>

    </ParallaxLayer>
  );
}
export default FirstChapter;