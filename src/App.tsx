import React, {useRef, useEffect} from "react";
import "./App.css";

export default function App() {
  const modelRef = useRef(null);

  useEffect(() => {
    const checkARAvailability = setInterval(() => {
      const model = modelRef.current;
      if (model && model["canActivateAR"]) {
        clearInterval(checkARAvailability);
        console.log('can activate AR');
        // @ts-ignore
        model["activateAR"]();
      } else {
        console.log('waiting for AR availability...');
      }
    }, 1000); // 매 1초마다 확인

    return () => clearInterval(checkARAvailability); // 컴포넌트 언마운트 시 인터벌 해제
  }, []);


  return (
    <div className='App'>
      <model-viewer
        ref={modelRef}
        ar-modes="webxr scene-viewer quick-look"
        style={{width: '100%', height: '100%'}}
        environment-image="neutral"
        src="Whale_A/Whale_A_In_Ani_TEST.gltf"
        // src="glTF/WaterBottle.gltf"
        field-of-view="auto"
        min-field-of-view="10deg"
        max-field-of-view="90deg"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        // @ts-ignore
        ar
      ></model-viewer>
    </div>
  );
}