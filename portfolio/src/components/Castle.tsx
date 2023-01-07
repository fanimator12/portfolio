import { ParallaxLayer } from "@react-spring/parallax";
import castle_picture from "../photos/castlebody.png";

// Make it draggable
const castle = document.getElementById("castle") as HTMLElement;

let isDragging = false;
let currentX: number;
let currentY: number;
let initialX: number;
let initialY: number;
let xOffset = 0;
let yOffset = 0;

// castle.addEventListener("mousedown", dragStart);
// castle.addEventListener("mouseup", dragEnd);
// castle.addEventListener("mousemove", drag);

// function dragStart(e: MouseEvent) {
//   initialX = e.clientX - xOffset;
//   initialY = e.clientY - yOffset;

//   if (e.target === castle) {
//     isDragging = true;
//   }
// }

// function dragEnd(e: MouseEvent) {
//   initialX = currentX;
//   initialY = currentY;

//   isDragging = false;
// }

// function drag(e: MouseEvent) {
//   if (isDragging) {
//     e.preventDefault();
//     currentX = e.clientX - initialX;
//     currentY = e.clientY - initialY;

//     xOffset = currentX;
//     yOffset = currentY;

//     setTranslate(currentX, currentY, castle);
//   }
// }

// function setTranslate(xPos: number, yPos: number, el: HTMLElement) {
//   el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
// }

function Castle() {
  return (
    <ParallaxLayer
      offset={8}
      factor={5}
      speed={0.3}
      style={{
        backgroundColor: "transparent",
        top: "140px",
      }}
    >
        <img id="castle" src={castle_picture} />
    </ParallaxLayer>
  );
}

export default Castle;