import React from 'react';
import Main from "./components/Main/Main";
// import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import TableArea from './components/TableArea/TableArea';

import "./App.css"


function App() {
  return (
    <div className="App">
   
        <Header />
          <Main />
      <TableArea>
    </TableArea>
    </div>

  );
}

export default App;