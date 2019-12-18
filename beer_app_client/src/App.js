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
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  componentDidMount() {
    this.getBeers();
  }
  async getBeers() {
    const response = await axios("https://birra-app.herokuapp.com/beers");
    const data = response.data;
    this.setState({
      beers: data
    });
  }
  async handleAdd(event, formInputs) {
    event.preventDefault();
    await axios.post("https://birra-app.herokuapp.com/beers", formInputs);
    this.getBeers();
  }
  async handleDelete(deletedBeer) {
    await axios.delete(
      `https://birra-app.herokuapp.com/beers/${deletedBeer.id}`
    );
    this.getBeers();
  }

  async handleUpdate(event, formInputs) {
    event.preventDefault();
    console.log("updating");
    await axios.put(
      `https://birra-app.herokuapp.com/beers/${formInputs.id}`,
      formInputs
    );
    this.getBeers();
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.formInputs);
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
