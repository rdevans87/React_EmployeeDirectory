import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

import "./App.css" 

function App() {
  document.title = "Employee Directory"
  return (
    <div className = "App">
      <Wrapper>
      <Header />
      <Main/>
      </Wrapper>
      <Footer />
    </div>


  );
}

export default App;
