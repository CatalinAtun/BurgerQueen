import React, { Component } from 'react';
import { menu } from "../menu.json"
import "./Buttons.css"

class Buttons extends Component {
    constructor() {
        super();
        this.state = {
            menu
        }
    }
    render() {
        const menu = this.state.menu.map((item) => {
            return (
                <div className="container">
                    <button className="button">
                        {item.item}
                        <div>{item.precio}</div>
                    </button>
                </div>
            )
        })
        return (
            <div className="App">
                {menu}
            </div>

        )
    }
}

export default Buttons;