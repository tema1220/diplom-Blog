import { useState } from "react";
import Button from "../Button/button";


export default function Form() {

    const [dataName, setDataNAme] = useState("");
    function inputTextChange(event: any): void {
        setDataNAme(event.target.value)
        setError(event.target.value.length>20)
    }

    const [error, setError] = useState(false);

    return (
        <form>
            <label htmlFor="name">Введите имя</label>
            <input id="name" 
            type="text" 
            value={dataName} 
            onChange={inputTextChange}
            style = {{border : error ? "1px solid red": "1px solid black"}}> 
            </input>
        <div>NAME: {dataName}</div>
        </form>

    )
}



