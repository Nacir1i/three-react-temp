import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import setupModel from "./steupModel";

const loadHorse = async () => {
  const loader = new GLTFLoader();
  const horseData = await loader.loadAsync("src/assets/models/Horse.glb");
  const horse = setupModel(horseData);

  horse.scale.set(0.02, 0.02, 0.02);
  return horse;
};

export default loadHorse;
