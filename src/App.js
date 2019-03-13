import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons.js' // importo módulo de los botones
import Title from './components/Title.js'
import CustomerName from './components/CustomerName.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Title />
      <CustomerName />
      <Buttons />
      </div>
    );
  }
}

export default App;
