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







  // When the component mounts, update the title to be Wikipedia Searcher
// useEffect(() => {
//     document.title = "Employee Search";


// if (!search) {
//     return;
//   }

//   API.searchTerms(search)
//     .then(res => {
//       if (res.data.length === 0) {
//         throw new Error("No results found.");
//       }
//       if (res.data.status === "error") {
//         throw new Error(res.data.message);




// const handleInputChange = event => {
//     setSearch(event.target.value);
//   };

//   const handleFormSubmit = event => {
//     event.preventDefault();
//   };
//   return (
//     <div>
//       <Container style={{ minHeight: "100vh" }}>
//         <h1 className="text-center">Search For Anything on Wikipedia</h1>
//         <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
//           {error}
//         </Alert>
//         <SearchForm
//           handleFormSubmit={handleFormSubmit}
//           handleInputChange={handleInputChange}
//           results={search}
//         />
//         <SearchResults title={title} url={url} />
//       </Container>
//     </div>











