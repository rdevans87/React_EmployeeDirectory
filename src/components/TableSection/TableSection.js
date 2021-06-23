import React, {Component} from "react";
import Header from "../Header/Header"

import ResultsTable from "../ResultsTable/ResultsTable";
import TableHeader from "../TableHeader/TableHeader";
import ResultsData from "../ResultsData/ResultsData";
import API from "../../utils/API";  
import "./TableSection.css";

export default class DataSection extends React.Component {

  state = {
    search: "Name",
    employees: [],
  };

    handleSearchChange = (event) => {
      const { employeeName, value } = event.value;
      this.setState(
        {
          [employeeName]: value
       }
    )   
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


        componentDidMount() {
          API.getEmployees().then(results => {
            this.setState({
            employees: results.data.results,
            filteredEmployees: results.data.results
            });
          
          });
        };
    };

    searchEmployee = () => {
      getEmployeeName()
      .then((response) => {
        console.log(response);

        let filter = this,


 





export default TableSection;













