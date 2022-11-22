import { BoxGeometry, MeshStandardMaterial, Mesh } from "three";

const createCube = () => {
  const cubeGeometry = new BoxGeometry(2, 2, 2);
  const cuebMaterial = new MeshStandardMaterial({ color: "peachpuff" });
  const cube = new Mesh(cubeGeometry, cuebMaterial);
  cube.rotation.set(-0.5, -0.1, 0.8);

  return cube;
};

export default createCube;
