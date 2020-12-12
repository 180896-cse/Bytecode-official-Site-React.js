import React, { Component } from "react";
import "./styles.css";
import "tachyons";
import Form from "./component/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TO DO APP</h1>
        <Form />
      </div>
    );
  }
}
export default App;
