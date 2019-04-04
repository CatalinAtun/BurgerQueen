import React, { Component } from 'react';
import { menu } from "../menu.json"
import { lunch } from "../lunch.json"
import "./Buttons.css"

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu,
            lunch
        }
    }
    render() {
        const menu = this.state.menu.map((item) => {
            return (
                <div>
                    <button className="button" onClick={()=>this.props.sendItemsToArr(item)}>
                        {item.item}
                        <div>{item.precio}</div>
                    </button>
                </div>
            )
        })

        const lunch = this.state.lunch.map((item) => {
            return (
                <div>
                    <button className="button" onClick={()=>this.props.sendItemsToArr(item)}>
                        {item.item}
                        <div>{item.precio}</div>
                    </button>
                </div>
            )
        })

        return (
            <div className="App">
            <nav className="nav"><h5>Desayuno</h5></nav>
            <div className="menu">{menu}</div>
            <nav className="nav"><h5>Almuerzo y cena</h5></nav>
            <div className="lunch">{lunch}</div>
            </div>
        )
    }
}

export default Buttons;