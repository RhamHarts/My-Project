import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  //kiri -> getter
  //kanan -> setter
  const [yourValue, setYourValue] = useState(0);

  return (
    <div className="container">
      <h1>I Have : {yourValue} Value</h1>
      <button onClick={() => setYourValue((prev) => prev + 1)}>+ 1</button>
      <button onClick={() => setYourValue((prev) => prev - 1)}>- 1</button>
      <button onClick={() => setYourValue((prev) => prev + 10)}>+ 10</button>
      <button onClick={() => setYourValue((prev) => prev - 10)}>- 10</button>
      <button onClick={() => setYourValue((prev) => prev + 100)}>+ 100</button>
      <button onClick={() => setYourValue((prev) => prev - 100)}>- 100</button>
      <button onClick={() => setYourValue((prev) => prev + 1000)}>
        + 1000
      </button>
      <button onClick={() => setYourValue((prev) => prev - 1000)}>
        - 1000
      </button>
      <button onClick={() => setYourValue(0)}>Reset</button>
    </div>
  );
}

export default App;
