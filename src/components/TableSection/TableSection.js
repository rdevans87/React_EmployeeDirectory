import React, { Component } from "react";
import Navbar from "./Navbar";
import ResultsTable from "../ResultsTable/ResultsTable";
import ResultsData from "./ResultsData";
import API from "../../utils/API";
import "./TableSection.css";

export default class DataSection extends Component {
  
  state = {
    employees: [{}],
    order: "descending",
    filteredEmployees: [{}]

  };


  componentDidMount() {
    API.getEmployees().then(results => {
      this.setState({
        employees: results.data.results,
        filteredEmployees: results.data.results
      });

    });
  };

  

render(){
  return(
 
<>
  <Navbar handleSearchChange={this.handleSearchChange} />
  <div className="table-section">

    <Search
     search={this.state.search}
      handleInputChange={this.handleInputChange}
      handleSubmit={this.handleInputSubmit}
      />

    <ResultsTable
      cols={this.cols}
       handleSort={this.handleSort} />
      <ResultsData
       employees={this.state.filteredEmployees}
      />
    </div>
    </>  
  
   ); 
  }
}




getEmployees = () => [
  getEmployeeName()
    .then((response) => {
      console.log(response);
      this.setState(
        {

          employees: response.data.results
        }
      )
    })
    .catch((error) => {
      console.log(error)
    })

]


searchEmployee = () => [
  getEmployeeName()
    .then((response) => {

      console.log(response);

      let filter = this.state.search;

      let filteredList = response.data.results.filter(item => {
        let values = Object.values(item.name.first.last)
          .joinh("")
          .toLowerCase();
        return values.indexOf(filter.toLowerCase()) != -1;
      });
      this.setState(
        {
          employees: filteredList
        }

      )
    })
    .catch((error) => {
      console.log(error)
    })
  
];


handleSort = (event) => {
  event.preventDefault();
  console.log("Name")

  this.searchEmployee();

};














