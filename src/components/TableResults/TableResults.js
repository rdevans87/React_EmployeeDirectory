import React from "react";
import TableData from "../TableData/TableData";
import "./TableResults.css";

function TableResults({ headings, employees, handleSort }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <TableData employees={employees} />
      </table>
    </div>
  );
}

export default TableResults;



