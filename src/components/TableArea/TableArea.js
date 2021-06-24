import React from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import TableData from '../TableData/TableData';
import TableHeader from '../TableHeader/TableHeader';
import getEmployeeName from "../../utils/API";



export default class TableArea extends React.Component {


    state = {
        search: "",
        employees: []
    };
    // last search is staying on page
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


    // Working, but last search is not staying on page
    searchEmployee = () => [
        getEmployeeName()
            .then((response) => {

                console.log(response);

                let filter = this.state.search;

                let filteredList = response.data.results.filter(item => {
                    // merge data together, then see if user input is anywhere inside  
                    let values = Object.values(item.name.first)
                        .join("")
                        .toLowerCase();
                    return values.indexOf(filter.toLowerCase()) !== -1;
                });

                this.setState(
                    {
                        employees: filteredList
                    }
                )

            })
            .catch((err) => {
                console.log(err);
            })
    ]




    handleInputSubmit = (event) => {
        event.preventDefault();
        console.log("stuff");
        // const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

        // const BASEURL = "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole";

        this.searchEmployee();

    }

    // Last thing to do
    SortByName = (e) => {
        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked!');
        }
    }

    // const handleSort = (parameter) => {
    //     (order === 'asc') ? setOrder('desc') : setOrder('asc')
    //     const newSortedList = listUtils.sortList(employees, parameter, order)
    //     setEmployees(newSortedList)
    //   }



    // Key?

    render() {
        return (
            <div className="wrapper" >

                <Header />

                <SearchBar
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleInputSubmit}
                />

                <TableHeader SortByName={this.SortByName} />
                <TableData
                    employees={this.state.employees}
                />

            </div>
        );
    }

}