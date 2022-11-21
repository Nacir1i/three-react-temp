import * as THREE from "three";

class Objects {
  constructor() {
    this.cube = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    this.cuebMaterial = new THREE.MeshNormalMaterial();
    this.cuebMesh = new THREE.Mesh(this.cube, this.cuebMaterial);
  }

  Cube() {
    return this.cuebMesh;
  }

  CubeAnimation(renderer, scene, camera) {
    this.cuebMesh.rotation.x = 0.1 / 2000;
    this.cuebMesh.rotation.y = 0.1 / 1000;
    renderer.Render(scene, camera);
  }
}

export default Objects;
