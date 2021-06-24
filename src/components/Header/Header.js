import React from "react";
import  "./Header.css";

export default class Header extends React.Component {

render(){
    return (
      <div>
        <div className="jumbo jumbotron-fluid">
          <div className="header">
            <h1 className="text-center text-white">Employee Directory</h1>
            <p className="lead text-center text-white">Search for Employees. Sort by category or filter by property</p>

          </div>
        </div>
      </div>
    
    )
}

}
