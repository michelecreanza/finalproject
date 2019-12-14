import React from "react";
import Beers from "./Beeers.js";

function Main(props) {
  const { beers, handleDelete, handleUpdate } = props;
  return (
    <main>
      <Beers
        beers={beers}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </main>
  );
}

export default Main;
