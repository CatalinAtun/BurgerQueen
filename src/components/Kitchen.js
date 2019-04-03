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
                {item.precio}
                <button onClick={()=>this.props.deleteItem(item)}>X</button>
                </div> 
            ) 
        })
        return showOrderConst
    }

    sendToKitchen() {
        console.log("Pedido enviado a cocina")
    }


    render() {
        return (
            <div className="kitchen">
                <nav className="navOrder"><h4>Pedidos</h4></nav>
                <nav className="navFood">{this.showOrder()}</nav>
                <nav className="totalOrder">Total:</nav>
                <button className="buttonKitchen" onClick={this.sendToKitchen}>Enviar a cocina</button>
            </div>
        );
    }
}
export default Kitchen;