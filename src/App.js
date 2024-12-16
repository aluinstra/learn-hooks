import React, { useEffect } from 'react';
import useCounter from './useCounter';

function App() {
    const {
        count,
        step,
        increment,
        decrement,
        reset,
        handleStepChange, // Consuming the handleStepChange method
    } = useCounter(0, 1); // Initialize count at 0 and step at 1

    useEffect(() => {
        console.log('Effect runs only once.');
    }, []);

    useEffect(() => {
        console.log('Effect runs after every render.');
    });

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(`Effect runs when count changes: ${count}`);
        }, 1000);

        return () => clearInterval(interval); // Cleanup function
    }, [count]);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
            <div>
                <label htmlFor="stepInput">Step:</label>
                <input
                    id="stepInput"
                    type="number"
                    value={step}
                    onChange={(e) => handleStepChange(e.target.value)}
                />
            </div>
        </div>
    );
}

export default App;
