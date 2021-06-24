import React from "react";
import Moment from 'react-moment';
import "../TableData/TableData.css";


function TableData({ employee }) {

    return (
      <div>
      {employee !== undefined && employee[0].name !== undefined ? (
        employee.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Image" className="align-middle">
                <img      
                src={picture.medium}
                alt={"profile image for " + name.first + " " + name.last}
                className="img-responsive"
              />
                </td>    
                <td data-th="Name" className="name-cell align-middle">
                {name.first} {name.last}
              </td>
              <td data-th="Phone" className="align-middle">
                {phone}
              </td>
              <td data-th="Email" className="align-middle">
                <a href={"mailto:" + email} target="__blank">
                  {email}      
                  </a>
              </td>
              <Moment format="MM/DD/YYYY">
               <td>{employee.dob.date}</td>
              </Moment>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default TableData;