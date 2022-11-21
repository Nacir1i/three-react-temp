import * as THREE from "three";

class Renderer {
  constructor(animation) {
    this.renderer = new THREE.WebGL1Renderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
  }

  Render(scene, camere) {
    this.renderer.render(scene, camere);
  }

  Animation(animation) {
    this.renderer.setAnimationLoop(animation);
  }
}

export default Renderer;
