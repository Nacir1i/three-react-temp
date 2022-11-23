import { BoxGeometry, MeshStandardMaterial, Mesh, MathUtils } from "three";

const createCube = () => {
  const cubeGeometry = new BoxGeometry(2, 2, 2);
  const cuebMaterial = new MeshStandardMaterial({ color: "skyblue" });
  const cube = new Mesh(cubeGeometry, cuebMaterial);
  cube.rotation.x = MathUtils.degToRad(40);
  cube.rotation.y = MathUtils.degToRad(45);

  return cube;
};

export default createCube;
