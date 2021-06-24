import React from "react";
// import TableData from "../TableData/TableData";
import "./TableHeader.css";


export default class TableHeader extends React.Component {



  render() {
    return (
        <div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Image</th>


                        <th scope="col"

                            handleClick={this.props.SortByName}
                        >
                            Name

                         </th>

                        {/* <th scope="col">Name</th> */}
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


// function TableHeader({employees, SortByName }) {
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             {this.props.employees.map(({ name, width }) => {
//               return (
//                 <th
//                   className="col"
//                   key={name}
//                   style={{ width }}
//                   handleClick={() => {
//                     this.nameSortByName());
//                   }}
//                 >
//                   {name}
//                   <span className="pointer"></span>
//                 </th>
//               );
//             })}
//           </tr>
//         </thead>

//         <TableData employees={employees} />
//       </table>
//     </div>
//   );
// }

// export default TableHeader;



