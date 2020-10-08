import React, { Component } from "react";
import "./App.css";
import Info from "./Info";
import Jobs from "./Jobs";
import Education from "./Education";

class App extends Component {
  render() {
    return (
      <div>
        <Info />
        <Jobs />
        <Education />
      </div>
    );
  }
}

export default App;
