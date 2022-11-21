import { useEffect } from "react";
import Scene from "./lib/Scene";

export default function App() {
  useEffect(() => {
    const scene = new Scene();

    scene.Initiate();
  }, []);

  return <div className="bg-red-400"></div>;
}
