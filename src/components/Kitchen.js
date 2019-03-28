import React, { Component } from 'react';
import "./Kitchen.css"

class Kitchen extends Component {
    render() {
        return (
            <div className="kitchen">
                <nav className="navOrder"><h4>Pedidos</h4></nav>
                <nav className="navFood"></nav>
            </div>
        );
    }
}
export default Kitchen;