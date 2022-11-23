import { BoxGeometry, MeshStandardMaterial, Mesh, MathUtils } from "three";

const createCube = () => {
  const cubeGeometry = new BoxGeometry(2, 2, 2);
  const cuebMaterial = new MeshStandardMaterial({ color: "skyblue" });
  const cube = new Mesh(cubeGeometry, cuebMaterial);
  const radiosToRotate = MathUtils.degToRad(30);

  cube.tick = (delta) => {
    cube.rotation.x += radiosToRotate * delta;
    cube.rotation.y += radiosToRotate * delta;
  };

  return cube;
};

export default createCube;
