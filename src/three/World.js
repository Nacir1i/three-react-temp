import createCamera from "./components/camera";
import createScene from "./components/scene";
import createRenderer from "./components/renderer";
import createLight from "./components/lights";
import createMeshs from "./components/objects/mesh";
import Resizer from "./systems/Resizer";
import Loop from "./systems/Loop";
import creatControls from "./systems/controls";

class World {
  #scene;
  #camera;
  #renderer;
  #loop;
  #controls;
  #resizer;

  constructor(container) {
    this.#scene = createScene();
    this.#camera = createCamera();
    this.#renderer = createRenderer();
    const { directLight, ambLight } = createLight();
    const { text } = createMeshs("lolrandomxd");

    this.#resizer = new Resizer(container, this.#camera, this.#renderer);
    this.#controls = creatControls(this.#camera, this.#renderer.domElement);
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer, [
      this.#controls,
    ]);

    this.#scene.add(text, directLight, ambLight);
    container.appendChild(this.#renderer.domElement);
  }

  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }

  start() {
    this.#loop.start();
  }

  stop() {
    this.#loop.stop();
  }
}

export default World;
