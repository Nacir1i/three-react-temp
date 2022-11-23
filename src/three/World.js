import createCamera from "./components/camera";
import createScene from "./components/scene";
import createRenderer from "./components/renderer";
import createLight from "./components/light";
import createCube from "./components/cube";
import Resizer from "./systems/Resizer";
import Loop from "./systems/Loop";

let scene;
let camera;
let renderer;
let cube;
let light;
let loop;

class World {
  constructor(container) {
    scene = createScene();
    camera = createCamera();
    renderer = createRenderer();
    cube = createCube();
    light = createLight();

    loop = new Loop(camera, scene, renderer, [cube]);
    this.resizer = new Resizer(container, camera, renderer);

    scene.add(cube, light);

    container.appendChild(renderer.domElement);
  }

  render() {
    renderer.render(this.scene, this.camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export default World;
