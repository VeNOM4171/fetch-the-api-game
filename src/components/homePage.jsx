import React, { Component } from "react";
import HackerNewsApi from "./hnApi";
 
class HomePage extends Component {
  state = {}

  render() {
    console.log(this.props);
    return (
      <>
        <HackerNewsApi />
      </>
    );
  }
}

export default HomePage;
