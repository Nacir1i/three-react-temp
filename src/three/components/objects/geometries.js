import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

const createGeometries = (message) => {
  const laoder = new FontLoader();
  const font = laoder.load("/src/three/assets/fonts/GodOfWar.json");
  const textGeometry = new TextGeometry(message, {
    font: font,
    size: 50,
    height: 10,
    curveSegments: 12,
    bevelThickness: 1,
    bevelSize: 1,
    bevelEnabled: true,
  });

  return { textGeometry };
};

export default createGeometries;
