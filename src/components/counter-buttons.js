import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import { CounterContext } from "../context/counter-context";

export default function CounterButtons() {
    const [count, setCount] = useContext(CounterContext);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div>
            <Button.Group>
                <Button color="red" onClick={reset}> Reset </Button>
                <Button color="orange" onClick={decrement}> Minus </Button>
                <Button color="green" onClick={increment}> Add </Button>
            </Button.Group>
        </div>
    );
}
