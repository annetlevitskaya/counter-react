import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
    state = {
        counter: 0,
    }

    plus = () => {
        this.setState(({ counter }) => ({
            counter: ++counter,
        }))
    }

    minus = () => {
        this.setState(({ counter }) => ({
            counter: --counter,
        }))
    }

    render() {
        const { counter } = this.state;
        return (
            <div className="Container">
                <div className="Counter">{counter}</div>
                <button onClick={this.minus} className="Counter__btn">-</button>
                <button onClick={this.plus} className="Counter__btn">+</button>
           </div>
        )
    }
}