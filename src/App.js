import React from "react";
import React from "./components/Main";
import Header from "./components/Wrapper";
import Wrapper from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Navbar from "./components/Navbar";

import "./App.css" 

function App() {
  document.title = "Employee Directory"
  return (
    <div className = "App">
      <
      <Wrapper>
      <Header/>
      <Main/>
      </Wrapper>
    </div>


  );
}

export default App;
