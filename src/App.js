import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons.js' // importo módulo de los botones
import CustomerName from './components/CustomerName.js' // nombre del cliente

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="containerTitle">Burger Queen</div>
        <CustomerName />
        <div className="containerLeft">
        <Buttons />
        </div>
      </div>
    );
  }
}

export default App;
