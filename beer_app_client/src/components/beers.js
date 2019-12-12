import React, { Component } from "react";
import axios from "axios";

class Beers extends Component {
  state = {
    beers: []
  };
  componentDidMount() {
    this.getDaters();
  }
  async getDaters() {
    const response = await axios("/beers");
    const data = response.data;
    this.setState({
      beers: data
    });
  }

  render() {
    return (
      <>
        <header>
          <h1>Hello Beer World</h1>
        </header>

        {this.state.beers.map(beers => {
          return (
            <main>
              <div key={beers.id}>
                <h3>Name: {beers.name} </h3>
                <img src={beers.img} alt={beers.name} />
                <h4>Starsign: {beers.alcohol} </h4>
              </div>
            </main>
          );
        })}
      </>
    );
  }
}

export default Beers;
