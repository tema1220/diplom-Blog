import { useState } from 'react';
import './Style.css';

export default function State() {
    const [text, setText] = useState("Я первый")
    let [count, setCount] = useState(1)
    function changeText() {
        setText("Я второй")
    }
    return (
        <>
           <div onClick={changeText}>{text}</div>
           <div onClick={() => setCount(count++)}>{count}</div>
        </>
    );
}

