import React from "react";
import React from "./components/Main";
import Header from "./components/Wrapper";
import Wrapper from "./components/Header";

import "./App.css" 

function App() {
  return (
    <div className = "App">
      <Wrapper/>
      <Header/>
      <Main/>
      <Wrapper/>
    </div>


  );
}

export default App;
