import React from "react";
import  "./Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function Header({ header }) {
  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;


};

  
render() {
    return (
      <div>
        <div className="jumbo jumbotron-fluid">
          <div className="headerr"><span>({current}))</span>
            <h1 className="text-center text-white">Employee Directory</h1>
            <p className="lead text-center text-white">Search for Employees. Sort by category or filter by property</p>

          </div>
        </div>
      </div>
    
    );
}
  



