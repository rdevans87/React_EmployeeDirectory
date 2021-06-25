import React from "react";
import Moment from 'react-moment';
import "../TableData/TableData.css";

export default class TableData extends React.Component {



    render() {
        return (
            <div>

                <table className="table">
            
                    <tbody>

                        {this.props.employees.map((employee) => (
                          
                            < tr >
                                <th scope="row"></th>

                                <td>
                                    <img
                                        src={employee.picture.medium}
                                        alt='employee'
                                        
                                    />
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







