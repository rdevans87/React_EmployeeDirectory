import React, { Component } from "react";
import Moment from "react-moment";

export default class ResultData extends Component {
    
    
    render(){
    return(
        <div>
             <table className="table table-light mt-5">
               
                <tbody>
                    {this.props.employees.map((employee) => (
                        <tr>
                            <th scope="row"></th>
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
        </table>
     </div>
   ) 

  }

}

