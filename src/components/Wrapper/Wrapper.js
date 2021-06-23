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


// function Wrapper(props) {
//   return <main className="wrapper" {...props} />;
// }

// export default Wrapper;

