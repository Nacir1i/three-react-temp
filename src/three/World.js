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

    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
      this.render();
    };

    scene.add(cube, light);

    container.appendChild(renderer.domElement);
  }

  render() {
    renderer.render(scene, camera);
  }
}

export default World;
