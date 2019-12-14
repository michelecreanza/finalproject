import React from "react";
import Beer from "./Beer.js";

function Beers(props) {
  const { beers, handleDelete, handleUpdate } = props;
  return (
    <div>
      {beers.map(beer => (
        <Beer
          key={beer.id}
          beer={beer}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default Beers;
