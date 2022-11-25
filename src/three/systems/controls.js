import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const createControls = (camre, domElemetn) => {
  const control = new OrbitControls(camre, domElemetn);
  control.enableDamping = true;
  control.enableZoom = true;
  control.tick = () => {
    control.update();
  };

  return control;
};

export default createControls;
