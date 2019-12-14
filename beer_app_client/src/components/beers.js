import React, { Component } from "react";
import axios from "axios";

class Beers extends Component {
  state = {
    beers: []
  };
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
      <>
        <header>
          <h1>Hello Beer World</h1>
        </header>

        {this.state.beers.map(beer => {
          return (
            <main>
              <div key={beer.id}>
                {/* <h3>Name: {beers.name} </h3> */}
                <img src={beer.img} alt={beer.name} />
                {/* <h4>alcohol: {beers.alcohol} </h4> */}
              </div>
            </main>
          );
        })}
      </>
    );
  }
}

export default Beers;
