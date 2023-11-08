import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className='App'>
      <model-viewer
        ar-modes="webxr scene-viewer quick-look"
        style={{width: '100%', height: '100%'}}
        environment-image="neutral"
        src="glTF/WaterBottle.gltf"
        field-of-view="auto"
        min-field-of-view="auto"
        max-field-of-view="auto"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        // @ts-ignore
        ar
      ></model-viewer>
    </div>
  );
}