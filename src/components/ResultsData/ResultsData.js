import React from "react";
import Moment from "react-moment";
import ResultsTable  from "../ResultsTable/ResultsTable";

export default class ResultData extends React.Component {


    render() {
        return (
            <div>
                <ResultsTable>
                <table className="table">

                    <tbody>
                        {this.pictures.map((name) => (

                            < tr >
                                <th scope="row"></th>

                                <td>
                                    <img
                                        src={name.picture.medium} alt="Profile"
                                    />
                                </td>


                                <td>{name.first} {name.last}</td>
                                <td>{name.phone}</td>
                                <td>{name.email}</td>
                                <Moment format="MM/DD/YYYY">
                                    <td>{name.dob.date}</td>
                                </Moment>
                            </tr>

                        ))}
                    </tbody>
             </table>
           </ResultsTable>
            
            </div>
        )

    }

}

