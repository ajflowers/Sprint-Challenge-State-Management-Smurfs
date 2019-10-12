import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import SmurfTagger from "./SmurfTagger";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! DELICIOUS!</h1>
        <div>Have fun!</div>
        <SmurfTagger />
        <SmurfList />
      </div>
    );
  }
}

export default App;
