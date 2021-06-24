
import React from "react";
import Header from "../Header/Header";
// import Main from "../Main/Main";
import Search from "../Search/Search";
import ResultsTable from "../ResultsTable/ResultsTable";
import ResultsData from "../ResultsData/ResultsData";
import getName from "../../utils/API";
import "./TableSection.css";



export default class TableSection extends React.Component {
  
  state = {
    search:"names",
    order: "descend",
    filteredNames: [{}]
  
  }


  componentDidMount = () => {
    this.loadNames();
  }

    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState(
        {

          [name]: value

        }
    )
}     

loadNames = () => [
  getName()
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


searchNames = () => [
  getName()
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

  this.searchName();

};



//   SortByName = (event) => {
//   event.preventDefault();
//   console.log("Listening!")

// }


 
render() {
return(
      <div className="wrapper" >
        
        <Header/>

    <Search
     search={this.state.search}
      handleInputChange={this.handleInputChange}
      handleSubmit={this.handleInputSubmit}
      />

    <ResultsTable SortByName={this.SortByName} />
      <ResultsData
       names={this.state.employees}
      />
  
   </div>
  
   ); 
}

}