import React from "react";
import Data from "./MOCK_DATA.json";
import "./index.css";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {Data.filter((val) => {
        if (search === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(search.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
