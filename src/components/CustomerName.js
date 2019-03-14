import React, { Component } from 'react';
import './CustomerName.css'

class CustomerName extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            tempName: ""
        }

        this.onChange = this.onChange.bind(this);
        this.temporalName = this.temporalName.bind(this);
    }

    onChange() {
        this.setState({
            name: this.state.tempName
        })
    }

    temporalName(event) {
        this.setState({
            tempName: event.target.value
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <p>Ingrese nombre del cliente</p>
                <input onChange={this.temporalName}></input>
                <button onClick={this.onChange}>ENVIAR</button>
                <p>Cliente atendiendo: {this.state.name}</p>
            </div>
        )
    }
}

export default CustomerName;