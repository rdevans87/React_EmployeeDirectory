import React from "react";
// import "../Search/Search.css";

export default class Search extends React.Component {
        
    
    render() {
    return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-inline">
                <label htmlFor="employee">Employee Search:</label>
                    <input
                        type="search"
                        value={this.props.search}
                        onChange={this.props.handleInputChange}
                        className="form-control"
                        id="name"
                        />
                      <button className="btn-primary btn-outline-dark">
                        Search
                    </button>
                    </div>
                </form>
            </div>
        )
    };
};
