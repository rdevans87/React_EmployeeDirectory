import React, { Component } from "react";
import Header from "../Header/Header";
import Navbar from "..Navbar/Navbar";
import ResultsTable from "../ResultsTable/ResultsTable";
import TableHeader from "../TableHeader/TableHeader";
import ResultsData from "../ResultsData/ResultsData";
import API from "../../utils/API";
import "./TableSection.css";
import { render } from "@testing-library/react";
import { renderIntoDocument } from "react-dom/test-utils";

export default class DataSection extends React.Component {

  state = {
    search: "name",
    employees: [],
  };


  componentDidMount() {
    API.getEmployees().then(results => {
      this.setState({
        employees: results.data.results,
        filteredEmployees: results.data.results
      });

    });
  };
};

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


handleFormSubmit = (event) => {
  event.preventDefault();
  console.log("Name")

  this.searchEmployee();

}


handleSearchChange = (event) => {
  function handleSearch(event) {
    event.preventDefault();
    console.log('sorting');
  }
}

render()
return (

    <Navbar handleSearchChange={this.handleSearchChange} />
    <div className="wrapper">
      <Search
        search={this.state.search}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleInputSubmit}
      />
      <TableSection>
        <ResultsTable handleSort={employeeName.results.handleSort} />
        <ResultsData employees={this.state.employees}
        />
      </div>














