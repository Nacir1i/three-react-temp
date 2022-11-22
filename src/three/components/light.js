import { DirectionalLight } from "three";

function createLights() {
  const light = new DirectionalLight("peachpuff", 8);

  light.position.set(10, 10, 10);

  return light;
}

export default createLights;
