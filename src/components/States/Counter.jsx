import { useState } from "react";

function Counter() {

    const [count, setCount] = useState();
    const[history, setHistory] = useState([]);

    const handleChange = (event) => {
        console.log("Event:", event);
        const newCount = parseInt(event.target.value);
        setCount(newCount);
        setHistory(currentHistory => {
            const newHistory = currentHistory;
            newHistory.push(newCount);
            return newHistory;
        })
        
    }

    const handleClick = (event) => {
        const countChange = parseInt(event.target.innerText);
        const newCount = count + countChange;
        setCount(newCount);
        setHistory(currentHistory => {
            const newHistory = currentHistory;
            newHistory.push(newCount);
            return newHistory;

        })

    }

    console.log ("HISTORY", history);

    return (
        <>
            <input type="number" value={count} onChange={handleChange} />
            <button onClick={() => setCount(parseInt(count) + 10)}>increment 1</button>
            <button onClick={() => setCount(parseInt(count) - 10)}>decrement 1</button>
            <button onClick={() => setCount(0)}>reset</button>
            <h2> History:</h2>
            <p>  {history.tostring()} </p>   
                </>
    )

}

export default Counter;