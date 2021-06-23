import React from 'react';
import "../Wrapper/Wrapper.css";

function Wrapper({ children }) {

    return (
        <div className="wrapper">
            { children }
        </div>
    );
}

export default Wrapper;


// import React from "react";
// import "./style.css";

// function Wrapper(props) {
//   return <main className="wrapper" {...props} />;
// }

// export default Wrapper;

