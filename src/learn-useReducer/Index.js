import React, { useReducer } from 'react';
import "../learn-useState/Counter.css";

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        case 'reset': return 0;
        default: throw new Error('Unexpected action');
    }
};

const LearnUseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="Main">
            <p className="Text">Counter with useReducer</p>
            <p>Kelompok 35</p>
            <p className="Text">{count}</p>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" onClick={() => dispatch('increment')}>
                        Up
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={() => dispatch('decrement')}>
                        Down
                    </button>
                </div>
            </div>

            <div className="ViewButton">
                <button className="Button" onClick={() => dispatch('reset')}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default LearnUseReducer;