import React from "react";
// import ResultsData from "../ResultsData/ResultsData";
// import ResultsTable from "../ResultsTable/ResultsTable";
// import DataSection from "..TableSection/TableSection";
// import ResultsData from "../ResultsData/ResultsData";
import "./ResultsTable.css";


export default class ResultsTable extends React.Component {

   render() {
      return (
          <div>
              <table className="table-light">
               <thead classame="thead-dark">
           <tr>
           <th scope="col" id="profile-image">Profile</th>
           <th scope="col"
               onClick={this.props.SortByName}> 
               Name
               </th>    
               <th scope="col">Phone</th>
                <th scope="col">Email</th> 
                <th scope="col">DOB</th>     
            </tr>
           </thead>
           
           </table>
       </div>
   
      )

   }


}




