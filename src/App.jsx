import { useEffect } from "react";
import World from "./three/World";

export default function App() {
  useEffect(() => {
    const container = document.getElementById("container");
    const world = new World(container);

    world.start();
  }, []);

  return <div className="w-screen h-screen bg-red-400" id="container"></div>;
}
