import * as THREE from "three";
import Camera from "./Camera";
import Renderer from "./Renderer";
import Objects from "./Objects";

class Scene {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new Camera().camera;
    this.renderer = new Renderer().renderer;
    this.objects = new Objects();
    this.cube = this.objects.Cube();
  }

  Initiate() {
    this.scene.add(this.cube);
    this.renderer.setAnimationLoop((time) => {
      this.Animation(time);
    });
  }

  Animation(time) {
    this.objects.CubeAnimation(time);
    this.renderer.render(this.scene, this.camera);
  }
}

export default Scene;
