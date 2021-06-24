import React from "react";
import Moment from "react-moment";

export default class ResultData extends React.Component {
    
    
    render(){
    return(
        <div>
             <table className="table-light">
               <thead className="thead-dark">
        <tr>
                            <th scope="col">Profile</th>
                            <th scope="col"
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

