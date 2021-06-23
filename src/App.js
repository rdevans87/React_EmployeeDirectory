import React from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";


import "./App.css" 

function App() {
  document.title = "Employee Directory"
  return (
    <div className = "App">
      <Wrapper>
      <Header />
      <Main/>
      </Wrapper>
    
    </div>


  );
}

export default App;
