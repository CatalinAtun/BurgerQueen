import React, { Component } from 'react';
import "./Kitchen.css"

class Kitchen extends Component {
    constructor(props){
        super(props)
    }
    showOrder() {
        const showOrderConst = this.props.sendItemsToArrToKitchen.map((item) =>{
            return (
                <p>{item.item} {item.precio}</p>
            )
        })
        return showOrderConst
    }

    render() {
        return (
            <div className="kitchen">
                <nav className="navOrder"><h4>Pedidos</h4></nav>
                <nav className="navFood">{this.showOrder()}</nav>
                <button className="buttonKitchen">Enviar a cocina</button>
            </div>
        );
    }
}
export default Kitchen;