import { MeshStandardMaterial, MeshPhongMaterial } from "three";

const createMaterial = () => {
  const textMaterial = new MeshPhongMaterial({
    color: "green",
  });

  return { textMaterial };
};

export default createMaterial;
