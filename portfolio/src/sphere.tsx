
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Sphere() {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 2;

  const renderer = new THREE.WebGLRenderer();

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);

  const geometry = new THREE.SphereGeometry();
  const material = new THREE.MeshBasicMaterial({
    color: "#fff",
    wireframe: true,
  });

  const spaceTexture = new THREE.TextureLoader().load("photos/stars.png");
  scene.background = spaceTexture;

  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  window.addEventListener("resize", onWindowResize, false);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
  }

  function animate() {
    requestAnimationFrame(animate);

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    controls.update();

    render();
  }

  function render() {
    renderer.render(scene, camera);
  }
  animate();

}
export default Sphere;