import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import ResultsTable from "../ResultsTable/ResultsTable";
import ResultsData from "../ResultsData/ResultsData";
import API from "../../utils/API";
import "./TableSection.css";


export default class TableSection extends Component {
  
  state = {
    search: "name",
    order: "descending",
    filteredEmployees: []

  };


  componentDidMount = () => {
    this.loadEmployees();
  }

    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState(
        {

          [name]: value

        }
    )
}     

loadEmployees = () => [
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
        let values = Object.values(item.name.first)
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



















