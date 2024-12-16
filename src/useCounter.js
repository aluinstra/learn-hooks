import { useState } from 'react';

function useCounter(initialValue = 0, initialStep = 1) {
    const [count, setCount] = useState(initialValue);
    const [step, setStep] = useState(initialStep);

    const increment = () => setCount((prevCount) => prevCount + step);
    const decrement = () => setCount((prevCount) => prevCount - step);
    const reset = () => setCount(initialValue);

    const handleStepChange = (newStep) => {
        const parsedStep = parseInt(newStep, 10);
        setStep(isNaN(parsedStep) ? 1 : parsedStep); // Ensure a valid number or default to 1
    };

    return {
        count,
        step,
        increment,
        decrement,
        reset,
        handleStepChange, // Expose handleStepChange to the consuming component
    };
}

export default useCounter;

