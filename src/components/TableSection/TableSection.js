import React from "react";
import Header from "../Header/Header"
import 
import ResultsTable from "../ResultsTable/ResultsTable";
import TableHeader from "../TableHeader/TableHeader";
import TableData from "../ResultsData/ResultsData";
import API from "../../utils/API";  
import "./TableSection.css";

export default class TableSection extends React.Component {

  state = {
    search: "name",
    employee: []
  };

  componentDidMount() {
    API.getEmployees().then(results => {
      this.setState({
      employees: results.data.results,
      filteredEmployees: results.data.results
      });
    
    });
  }












};

export default Section;
