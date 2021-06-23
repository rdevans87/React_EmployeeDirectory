import React from "react";
import Moment from "react-moment";
import ResultsTable from "../ResultsTable/ResultsTable"

export default class ResultsData extends React.Components {
    
    
    render(){
    return(
        <div>
            <ResultsTable>
                <tbody>
                    {this.props.employees.map((employee) => (
                        <tr>
                            <th className="row"></th>
                            <td>
                            <img
                                src={employee.picture.medium}
                                alt='employee' />
                            </td>
                            <td>{employee.name.first} {employee.name.last}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                            <Moment format="MM/DD/YYYY">
                                <td>{employee.dob.date}</td>
                            </Moment>
                        </tr>
                    ))}

                </tbody>
            </ResultsTable>
        </div>
   );  

}

}

