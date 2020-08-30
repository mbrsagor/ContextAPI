function example({initialCount}) {
    const [count, setCount] = useState(initialCount);
    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </>
    )
}

export default example;