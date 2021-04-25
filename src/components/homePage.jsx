import React, { Component } from "react";
import Api1Page from "./api1Page";
 
class HomePage extends Component {
  state = {}

  render() {
    console.log(this.props);
    return (
      <>
        <Api1Page />
      </>
    );
  }
}

export default HomePage;
