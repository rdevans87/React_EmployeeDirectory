import React from "react";
import "../Search/Search.css";

export default class Search extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input
                        name="search"
                        value={this.props.search}
                        onChange={this.props.handleInputChange}>
                    </input>
                    <button>
                        Search
                    </button>
                </form>
            </div>

        )

    };
}

export default Search;