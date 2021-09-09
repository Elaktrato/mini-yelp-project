import './App.css';
import React, {useState, useEffect} from "react";
import Main from "./Main";
import SearchBar from "./SearchBar";

function App() {

  return (
    <div className="App">
      <SearchBar 
      // query={restaurants} 
      />
      <Main />
    </div>
  );
}

export default App;
