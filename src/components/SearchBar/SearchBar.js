import React from "react";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
        
    
    render() {
    return (
            
                <form onSubmit={this.props.handleInputSubmit}>
                    <input
                        name="search"
                        value={this.props.search}
                        onChange={this.props.handleInputChange}>

                     </input>       
                      <button value="submit" className="btn-primary btn-outline-dark">
                        Search
                    </button>
                </form>
            
        )
    };
};


