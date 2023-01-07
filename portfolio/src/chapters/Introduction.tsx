import { ParallaxLayer } from "@react-spring/parallax";
function Introduction() {
  return (
    <ParallaxLayer
      offset={0}
      speed={0.5}
      style={{
        top: "300px",
      }}>
      <div className="title">
        <h1>Hi there</h1>
      </div>

      <div className="title">
        <h1>I'm Fanimator</h1>
      </div>

      <div className="title">
        <h2>Software Engineer and Designer</h2>
      </div>

    </ParallaxLayer>
  );
}
export default Introduction;