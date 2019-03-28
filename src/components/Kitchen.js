import React, { Component } from 'react';
import "./Kitchen.css"

class Kitchen extends Component {
    constructor(props){
        super(props)
    }
    showOrder() {
        const showOrderConst = this.props.sendItemsToArrToKitchen.map((item) =>{
            return (
                <div className="order">
                <div className="itemOrder">{item.item}</div>
                <div>{item.precio}</div>
                </div> 
            ) 
        })
        return showOrderConst
    }

    render() {
        return (
            <div className="kitchen">
                <nav className="navOrder"><h4>Pedidos</h4></nav>
                <nav className="navFood">{this.showOrder()}</nav>
                <nav className="totalOrder">Total:</nav>
                <button className="buttonKitchen">Enviar a cocina</button>
            </div>
        );
    }
}
export default Kitchen;