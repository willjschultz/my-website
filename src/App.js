import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
  super(props);
  this.state = {isOpen: false};

  this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isOpen: !state.isOpen
    }))
  }

  render() {
   return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
          <h2 className="App-subtitle">Let's make something awesome </h2>
        </header>

        <body className="Body">
          <button className="Menu-box-closed">Contact Me</button>
          <button className={ !this.state.isOpen ? "Menu-box-closed" : "Menu-box-open"} onClick={this.handleClick}>About Me</button>
          <button className="Menu-box-closed" onClick={expand}>Technical Projects</button>
          <button className="Menu-box-closed">Books Read 2020</button>
          <button className="Menu-box-closed">Bucket List</button>
        </body>

        <footer>
          <p>Footer Stub</p>
          <p>Footer Stub</p>
          <p>Footer Stub</p>
        </footer>

      </div>
    );


    function expand() {
      alert("Great expand!");
    }
  }
}

export default App;
