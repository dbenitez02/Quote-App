import React, { Component } from 'react';
import './App.css';
import Quote from './components/Quote.jsx';

class App extends Component {

  render() {
    return (
      <div className="container" style={{textAlign: "center", color: "#417ff3"}}>
        <h1>Press For a quote</h1>
        <div className="center">
          <Quote />
        </div>
      </div>
    );
  }
}

export default App;
