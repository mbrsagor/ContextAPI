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

    const saysometing = () => {
        setCount("Hello, I'm Sagor");
    };

    return (
        <div>
            <Button.Group>
                <Button color="red" onClick={reset}> Reset </Button>
                <Button color="orange" onClick={decrement}> Minus </Button>
                <Button color="green" onClick={increment}> Add </Button>
                <Button color="yellow" onClick={saysometing}> Say something</Button>
            </Button.Group>
        </div>
    );
}
