import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class ContactList extends Component {
  
  render() {
    
    let myArray = [
      'contact 1',
      'contact 2',
      'contact 3'
    ];
    
    return (
        <ul>{myArray.map(thisContact => <li key={thisContact}>{thisContact}</li>)}</ul>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Starter contact list</h2>
        <ContactList/>
      </div>
    );
  }
}

export default App;
