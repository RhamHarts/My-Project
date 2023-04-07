import React from "react";
import SearchBar from "./Components/SearchBar";
import BookData from "./MOCK_DATA.json";
import "./App.css";
function App() {
  return (
    <div>
      <h1 className="bookpedia">BookPedia</h1>
      <SearchBar placeholder="Enter a Book Name..." data={BookData} />
    </div>
  );
}
export default App;
