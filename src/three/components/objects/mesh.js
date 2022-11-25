import { Mesh } from "three";
import createGeometries from "./geometries";
import createMaterials from "./materials";

const createMeshs = (message) => {
  const { textGeometry } = createGeometries(message);
  const { textMaterial } = createMaterials();
  const text = new Mesh(textGeometry, textMaterial);

  return { text };
};

export default createMeshs;
