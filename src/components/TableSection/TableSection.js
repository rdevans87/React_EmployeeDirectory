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
      const filter = event.target.value.trim();
      const filteredList = this.state.users.filter(item => {
        
        componentDidMount() {
          API.getEmployees().then(results => {
            this.setState({
            employees: results.data.results,
            filteredEmployees: results.data.results
            });
          
          });
        }
    }

 





export default TableSection;













