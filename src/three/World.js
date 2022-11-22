import createCamera from "./components/camera";
import createScene from "./components/scene";
import createRenderer from "./components/renderer";
import createLight from "./components/light";
import createCube from "./components/cube";
import Resizer from "./systems/Resizer";

let scene;
let camera;
let renderer;
let cube;
let light;

class World {
  constructor(container) {
    scene = createScene();
    camera = createCamera();
    renderer = createRenderer();
    cube = createCube();
    light = createLight();

    this.resizer = new Resizer(container, renderer, camera);

    container.appendChild(renderer.domElement);
  }

  render() {
    scene.add(cube, light);
    renderer.render(scene, camera);
  }
}

export default World;
