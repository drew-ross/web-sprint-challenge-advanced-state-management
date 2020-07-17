import React, { Component } from "react";
import Form from './Form';
import SmurfList from './SmurfList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Donate a Smurf Foundation</h1>
          <h2>Our village needs unwanted smurfs! In order to submit a smurf, please fill out our form below:</h2>
        </header>
        <Form />
        <SmurfList />
      </div>
    );
  }
}

export default App;
