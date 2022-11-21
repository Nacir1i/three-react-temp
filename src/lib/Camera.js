import * as THREE from "three";

class Camera {
  constructor() {
    this.fov = 70;
    this.aspec = window.innerWidth / window.innerHeight;
    this.near = 0.01;
    this.far = 10;

    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      this.aspec,
      this.near,
      this.far
    );

    this.camera.position.z = 1;
  }

  UpdatePosition(x, y, z) {
    this.camera.position.x = x;
    this.camera.position.y = y;
    this.camera.position.z = z;
  }
}

export default Camera;
