import { useEffect } from "react";
import World from "./three/World";

export default function App() {
  useEffect(() => {
    const initiatThreeWorld = async () => {
      try {
        const container = document.getElementById("container");
        const world = new World(container);

        await world.initiate("is is what it is");
        world.start();
      } catch (error) {
        console.log("error : ", error);
      }
    };

    initiatThreeWorld();
  }, []);

  return <div className="w-screen h-screen bg-red-400" id="container"></div>;
}
