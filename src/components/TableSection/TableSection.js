
import React from "react";
import Header from "../Header/Header";
// import Main from "../Main/Main";
import Search from "../Search/Search";
import ResultsTable from "../ResultsTable/ResultsTable";
import ResultsData from "../ResultsData/ResultsData";
import getEmployeeName from "../../utils/API";
import "./TableSection.css";



export default class TableSection extends React.Component {
  
  state = {
    search: "name",
    employees: []
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
        return values.indexOf(filter.toLowerCase()) !== -1;
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


handleInputSubmit = (event) => {
  event.preventDefault();
  console.log("Name")

  this.searchEmployee();

};


SortByName = (event) => {
  event.preventDefault();
  console.log("Listening!")
  this.setState({
    employees: this.data.results,
    filteredEmployees: this.data.results
})

}
 
render() {
return(
      <div className="table-section" >
        
        <Header/>

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
  
   ); 
  }
}



















