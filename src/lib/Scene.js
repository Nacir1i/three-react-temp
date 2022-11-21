import * as THREE from "three";
import Camera from "./Camera";
import Renderer from "./Renderer";
import Objects from "./Objects";

class Scene {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new Camera().camera;
    this.renderer = new Renderer().renderer;
    this.Objects = new Objects();
  }

  Initiate() {
    this.scene.add(this.Objects.Cube());
    this.renderer.render(this.scene, this.camera);
  }
}

export default Scene;
