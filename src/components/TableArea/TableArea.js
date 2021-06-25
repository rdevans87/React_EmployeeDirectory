import React from 'react';
import Header from "../Header/Header";
import SearchBar from '../SearchBar/SearchBar';
import TableData from '../TableData/TableData';
import TableHeader from '../TableHeader/TableHeader';
import getEmployeeName from "../../utils/API";




export default class TableArea extends React.Component {


    state = {
      search: "name",
      employees: [],
      
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
                        // API returns "results" 
                        employees: response.data.results
                    }
                )

            })
            .catch((err) => {
                console.log(err);
            })
    ]


    searchEmployee = () => [
        getEmployeeName()
            .then((response) => {

                console.log(response);

                const filter = this.state.search;

                const filteredList = response.data.results.filter(item => {
                   
                    let values = Object.values(item.name.first)
                        .join("")
                        .toLowerCase();
                    return values.indexOf(filter.toLowerCase()) !== -1;
                });
                  this.setState({
                        filteredEmployees: filteredList})

            })
            .catch((err) => {
                console.log(err);
            })
    ]

       
    handleInputSubmit = (event) => {
        event.preventDefault();
        console.log("handled submit");
     

        this.searchEmployee();

    }
     

    
    sortByName = () => [
            getEmployeeName()
                .then((response) => {
                    console.log(response);
                    this.setState(
                        {
                           employees: response.data.results
                        }
                    )
    
                })
                .catch((err) => {
                    console.log(err);
                })
            ]
    
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

                sortByName={this.sortByName}
                />   
                <TableData
                    employees={this.state.employees}
                />
        
            </div>
        );
    }

}