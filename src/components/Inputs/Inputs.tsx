import { useState } from "react";
import '../Inputs/inputs.css'
import { IInput } from "../../types/interface";
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';


export default function Inputs({ typeInput, isDisabled, type, legend, id, placeholder, inputValue, setInputValue }: IInput) {
    const [color] = useContext(myContext)

    function inputTextChange(event: any): void {
        

        setError(event.target.value.length > 30)
        setErrorText(event.target.value.length > 30)
    }
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState(false);


return (
    <div className={`mainBlock${color}`}>
        <form>
            <fieldset className="fieldset">
                <legend className={`legend${color}`}>{legend}</legend>
                <input
                    disabled={isDisabled}
                    id={id}
                    type={type}
                    className={typeInput}
                    value={inputValue}
                    onChange={setInputValue}
                    placeholder={placeholder}
                    style={{ border: error ? "2px solid #FD3419" : typeInput }}
                ></input>
            </fieldset>
            <div className="errorText"  style={{display: errorText ? "flex" : typeInput }}>Error text</div>
        </form>
    </div>

)
}






