import React from "react";

import "./App.css";
import Beers from "./components/beers.js";
import Aside from "./components/Aside.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Nav from "./components/Nav.js";
import axios from "axios";
import Form from "./components/Form.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
      // formInputs: {
      //   name: "",
      //   img: "",
      //   alcohol: ""
      // }
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleAdd(event, formInputs) {
    event.preventDefault();
    await axios.post("/beers", formInputs);
    // this.setState({
    //   formInputs: {
    //     name: "",
    //     img: "",
    //     alcohol: ""
    //   }
    // });
    this.getBeers();
  }
  async handleDelete(deletedBeer) {
    await axios.delete(`/beers/${deletedBeer.id}`);
    this.getBeers();
  }
  componentDidMount() {
    if (this.props.beer) {
      this.setState({
        alcohol: this.props.beer.alcohol || "",
        img: this.props.beer.img || "",
        name: this.props.beer.name || "",
        id: this.props.beer.id || ""
      });
    }
  }
  async handleUpdate(event, formInputs) {
    event.preventDefault();
    console.log("updating");
    await axios.put(`/beers/${formInputs.id}`, formInputs);
    this.getBeers();
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.formInputs);
  }
  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.props.handleSubmit(event, {
  //     name: this.state.name,
  //     img: this.state.img,
  //     alcohol: this.state.alcohol,
  //     id: this.props.beer.id
  //   });
  // }

  //... and pass this into the Aside

  componentDidMount() {
    this.getBeers();
  }
  async getBeers() {
    const response = await axios("/beers");
    const data = response.data;
    this.setState({
      beers: data
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Beers />
        <div className="container">
          {/* <Beers /> */}
          {/* <Form /> */}
          <Aside handleSubmit={this.handleAdd} />
          <Main
            beers={this.state.beers}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
          <Nav />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
