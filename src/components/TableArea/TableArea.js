
import React from "react";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import TableResults from "../TableResults/TableResults";
import TableData from "../TableData/TableData";
import getEmployeeName from "../../utils/API";
import "./TableSection.css";



export default class TableArea extends React.Component {

  state = {
    search: "names",
    employees: []

  }


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
            names: response.data.results
          }
        )

      })
      .catch((err) => {
        console.log(err)
      })

  ]


  searchEmployee = () => [
    getEmployeeName()
      .then((response) => {

        console.log(response);

        let filter = this.state.search;

        let filteredList = response.data.results.filter(item => {
          let values = Object.values(item.name.first)
            .join("")
            .toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });

        this.setState(
          {
            names: filteredList
          }

        )
      })
      .catch((err) => {
        console.log(err)
      })

  ]


  handleInputSubmit = (event) => {
    event.preventDefault();
    console.log("Name")
    // const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

    // const BASEURL = "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole";
    this.searchName();

  };



  SortByName = (event) => {
    event.preventDefault();
    console.log("Listening!")


  }

  //    const handleSort = (parameter) => {
  //       (order === 'asc') ? setOrder('desc') : setOrder('asc')
  //        const newSortedList = listUtils.sortList(employees, parameter, order)
  //         setEmployees(newSortedList)  
  // }



  render() {
    return (
      <div className="wrapper" >

        <Header />
        <SearchBar
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleInputSubmit}
        />
        
        <TableHeader 
        SortByName={this.SortByName} /> 
        <TableResults 
        names={this.state.employees}
          
       />


      
      </div>

    )

  }

}
