
function ResultsData({ user }) {


function ResultsData(props) {
    return (
      <ul className="list-group search-results">
        <li className="list-group-item">
          <h2>{props.title}</h2>
          <a href={props.url}>{props.url}</a>
        </li>
      </ul>
    );
  }
  
  export default SearchResults;




  // When the component mounts, update the title to be Wikipedia Searcher
// useEffect(() => {
//     document.title = "Employee Search";


// if (!search) {
//     return;
//   }

//   API.searchTerms(search)
//     .then(res => {
//       if (res.data.length === 0) {
//         throw new Error("No results found.");
//       }
//       if (res.data.status === "error") {
//         throw new Error(res.data.message);




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