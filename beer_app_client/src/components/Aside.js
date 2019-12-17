import React from "react";
import Form from "./Form.js";

function Aside(props) {
  return (
    <aside>
      <h1>Add your Beer!!</h1>
      <Form handleSubmit={props.handleSubmit} />
    </aside>
  );
}

export default Aside;
