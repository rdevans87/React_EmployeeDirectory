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
      const { employeeName, value } = event.name.value;
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

    searchEmployee = () => [
      getEmployeeName()
      .then((response) => {
        console.log(response);

        let filter = this.state.search;
        let filteredList = response.data.result.filter(item => {

          let values = Object.values(item.name.first.last)
          .joinh("")
          .toLowerCase();
          return values.indexOf(filter.toLowerCase()) != -1;
        });


        this.setState(
            {
              employees: filteredList
            }

        );

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


handleSort = (event) => {
  function handleOnClick(event) {
    event.preventDefault();
    console.log('sorting');
  }
};




 





export default TableSection;













