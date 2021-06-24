import React from "react";
import "./TableData.css";
export default class TableData extends React.Component {

  render() {
    return (
      tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Image" className="align-middle">
                <img
         
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
            </div >
        )
    }
}
        


