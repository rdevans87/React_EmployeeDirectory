import React from "react";
import "../Search/Search.css";

function Search(props) {
        return (
            <div>
                <form className="search" onSubmit={props.handleSubmit}>
                    <div className="form-inline">
                <label htmlFor="language">Employee Search:</label>
                    <input
                        name="search"
                        value={props.search}
                        onChange={props.handleInputChange}
                        name="name"
                        type="text"
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


export default Search;