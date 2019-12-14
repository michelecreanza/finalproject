import React from "react";
import Form from "./Form.js";

class Beer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
    this.toggleForm = this.toggleForm.bind(this);
  }
  toggleForm() {
    this.setState({ formVisible: !this.state.formVisible });
  }
  render() {
    const { beer, handleDelete, handleUpdate } = this.props;
    return (
      <>
        {this.state.formVisible ? (
          <Form
            beer={beer}
            handleSubmit={handleUpdate}
            toggleForm={this.toggleForm}
          ></Form>
        ) : (
          <div className="beer">
            <h3>{beer.name}</h3>
            <img src={beer.img} alt={beer.name}></img>
            <p>{beer.brand}</p>

            <p>{beer.alcohol}</p>
            <button onClick={() => handleDelete(beer)}>Delete</button>
            <button onClick={this.toggleForm}>Edit </button>
          </div>
        )}
      </>
    );
  }
}
export default Beer;
