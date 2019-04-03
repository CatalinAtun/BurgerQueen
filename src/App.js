import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons.js' // importo módulo de los botones
import CustomerName from './components/CustomerName.js' // nombre del cliente
import Kitchen from './components/Kitchen.js'

class App extends Component {
  constructor(){
    super();
    this.state =
    {
      menuApp: [],
      total: 0,
    }

    this.addItemsToArr = this.addItemsToArr.bind(this);
    this.deleteKitchenItems = this.deleteKitchenItems.bind(this);
  }

  addItemsToArr(e){
    let menu = this.state.menuApp;
    let newTotal = this.state.total;
    newTotal = newTotal + e.precio;
    menu.push(e);
    this.setState({
      ...this.state, 
      menuApp: menu,
      total: newTotal,
    })
  }

  deleteKitchenItems(order){
    let newTotal = this.state.total;
    newTotal = newTotal - order.precio;
    this.setState({
      ...this.state,
      menuApp: this.state.menuApp.filter((element)=>{
        return element !== order
      }),
      total: newTotal,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="containerTitle">Burger Queen</div>
        <CustomerName />
        <div className="divButton"> 
        <Buttons 
        sendItemsToArr={this.addItemsToArr}
        />
        </div>
        <Kitchen sendItemsToArrToKitchen={this.state.menuApp} deleteItem={this.deleteKitchenItems}
        total={this.state.total}
        />
      </div>
    );
  }
}

export default App;
