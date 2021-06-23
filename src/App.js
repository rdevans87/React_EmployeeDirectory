import React from "react";
import React from "./components/Main";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Nav from "./components/Nav";

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
