import * as THREE from "three";

class Objects {
  constructor() {
    this.cubeGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    this.cuebMaterial = new THREE.MeshNormalMaterial();
    this.cube = new THREE.Mesh(this.cubeGeometry, this.cuebMaterial);
  }

  Cube() {
    return this.cube;
  }

  CubeAnimation(time) {
    this.cube.rotation.x = time / 2000;
    this.cube.rotation.y = time / 1000;
  }
}

export default Objects;
