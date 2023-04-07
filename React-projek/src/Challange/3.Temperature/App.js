import React, { useState } from "react";
import "./index.css";

const App = () => {
  //kiri -> getter
  //kanan -> setter
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if (temperatureValue === 30) return;

    const newTemperature = temperatureValue + 1;

    setTemperatureValue(newTemperature);
    if (newTemperature >= 15) {
      setTemperatureColor("hot");
    }
  };

  const decreaseTemperature = () => {
    if (temperatureValue === -30) return;

    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature);

    if (newTemperature < 20) {
      setTemperatureColor("cold");
    }
    if (newTemperature < 0) {
      setTemperatureColor("very-cold");
    }
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemperature((prev) => prev + 1)}>
          +
        </button>
        <button onClick={() => decreaseTemperature((prev) => prev - 1)}>
          -
        </button>
        <button onClick={() => setTemperatureValue(10)}>Reset</button>
      </div>
    </div>
  );
};

export default App;
