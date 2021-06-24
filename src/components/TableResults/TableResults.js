import React from "react";

import "./TableResults/TableResults.css";


export default class TableResults extends React.Component {

    render() {
        return (
            <div>
                <table className="table">
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




