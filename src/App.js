import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons.js' // importo módulo de los botones
import CustomerName from './components/CustomerName.js' // nombre del cliente
import Kitchen from './components/Kitchen.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="containerTitle">Burger Queen</div>
        <CustomerName />
        <div className="divButton"> 
        <Buttons />
        </div>
        <Kitchen />
        
      </div>
    );
  }
}

export default App;
