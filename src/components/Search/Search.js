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






// const handleInputChange = event => {
//     setSearch(event.target.value);
//   };

//   const handleFormSubmit = event => {
//     event.preventDefault();
//   };
//   return (
//     <div>
//       <Container style={{ minHeight: "100vh" }}>
//         <h1 className="text-center">Search For Anything on Wikipedia</h1>
//         <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
//           {error}
//         </Alert>
//         <SearchForm
//           handleFormSubmit={handleFormSubmit}
//           handleInputChange={handleInputChange}
//           results={search}
//         />
//         <SearchResults title={title} url={url} />
//       </Container>
//     </div>
export default Search;