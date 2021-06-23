import React from "react";
import ResultsData from "../ResultsData/ResultsData";
// import ResultsTable from "../ResultsTable/ResultsTable";
// import DataSection from "..TableSection/TableSection";
// import ResultsData from "../ResultsData/ResultsData";
import "./ResultsTable.css";


export default class ResultsTable extends React.Component {

   render() {
      return (
          <div>
              <table className="table table-light mt-5">
               <thead classame="thead-dark">
           <tr>
           <th className="col" id="profile-image">Profile</th>
           <th className="col"
               onClick={this.props.SortByName}> 
               Name
               </th>    
               <th className="col">Phone</th>
                <th className="col">Email</th> 
                <th className="col">DOB</th>     
            </tr>
           </thead>
           <tbody>
    
            </tbody>
           </table>
       </div>
   
      );

   };


};




