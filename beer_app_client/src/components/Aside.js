import React from "react";
import Form from "./Form.js";

function Aside(props) {
  return (
    <aside>
      <h1>Add your Beer!!</h1>
      <Form handleSubmit={props.handleSubmit} />

      <h1>Michele skills</h1>

      <h2>
        Unix web development javascript node.js html css html express.js mongodb
        back end development front end development full stack development GitHub
        Git jQuery Mongoose SQL PHP Express Slack Databases Ruby ruby on rails
        Mongo Express React Node
      </h2>
    </aside>
  );
}

export default Aside;
