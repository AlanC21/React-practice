import React, { useState } from 'react';
import './App.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter - 1);

    return (
        <div className="counter-container">
            <h1 className="counter-display">{counter}</h1>
            <div className="counter-buttons">
                <button className="button-increment" onClick={increase}>
                    Incrementar
                </button>
                <button className="button-decrement" onClick={decrease}>
                    Decrementar
                </button>
            </div>
        </div>
    );
};

export default Counter;
