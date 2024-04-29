import './Button.css';
import { IButton } from '../../types/interface';

export default function Button({ text, isDisabled }: IButton) {
    return (
        <>
            <button 
            disabled={isDisabled} className='button'>{text}</button>
        </>
    );
}

