import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

const createGeometries = async (message) => {
  const laoder = new FontLoader();
  const font = await laoder.loadAsync("/src/three/assets/fonts/GodOfWar.json");
  const textGeometry = new TextGeometry(message, {
    font: font,
    size: 1,
    height: 0.25,
    curveSegments: 6,
    bevelEnabled: true,
    bevelThickness: 0.2,
    bevelSize: 0.05,
  });

  return { textGeometry };
};

export default createGeometries;
