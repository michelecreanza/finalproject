import React from "react";
import Input from "./Input.js";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      img: "",
      alcohol: "",
      brand: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.props.beer) {
      this.props.handleSubmit(event, {
        name: this.state.name,
        img: this.state.img,
        alcohol: this.state.alcohol,
        brand: this.state.brand,
        id: this.props.beer.id
      });
      this.props.toggleForm();
    } else {
      this.props.handleSubmit(event, {
        name: this.state.name,
        img: this.state.img,
        alcohol: this.state.alcohol,
        brand: this.state.brand
      });
    }
    this.setState({
      name: "",
      img: "",
      alcohol: "",
      brand: ""
    });
  }
  componentDidMount() {
    if (this.props.beer) {
      this.setState({
        alcohol: this.props.beer.alcohol || "",
        img: this.props.beer.img || "",
        name: this.props.beer.name || "",
        brand: this.props.beer.brand || "",
        id: this.props.beer.id || ""
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={"name"}
          placeholder={"name"}
          type={"text"}
          value={this.state.name}
          id={"name"}
        />
        <Input
          handleChange={this.handleChange}
          name={"img"}
          placeholder={"img"}
          type={"text"}
          value={this.state.img}
          id={"img"}
        />
        <Input
          handleChange={this.handleChange}
          name={"alcohol"}
          placeholder={"alcohol"}
          type={"text"}
          value={this.state.alcohol}
          id={"alcohol"}
        />
        <Input
          handleChange={this.handleChange}
          name={"brand"}
          placeholder={"brand"}
          type={"text"}
          value={this.state.brand}
          id={"brand"}
        />
        <input
          type="submit"
          value={this.props.beer ? "update this beer" : "add a beer"}
        />
      </form>
    );
  }
}

export default Form;
