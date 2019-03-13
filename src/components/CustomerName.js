import React, { Component } from 'react';
import './CustomerName.css'

class CustomerName extends Component {
    render(){
        return(
            <div className="container-fluid">
            <p>Ingrese nombre del cliente</p>
            <input></input>
            <button>Enviar</button>
            <p>Cliente:</p>
            </div>
        )
    }
}

export default CustomerName;