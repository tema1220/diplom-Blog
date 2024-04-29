import './NavigationPostCard.css';
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';

export default function NavigationPostCard() {
    const [color] = useContext(myContext)

    return (
        <>
            <div className={`mainBlockNavigation${color}`}>
                <div className={`arrowLeft${color}`}>
                    <HiArrowLeft className='iconArrLeft'></HiArrowLeft>
                    Prev
                </div>
                <div className={`NumberSequence${color}`}>1 2 3 ... 6</div>
                <div className={`arrowRight${color}`}>
                    Next
                    <HiArrowRight className='iconArrRight'></HiArrowRight>
                </div>
            </div>
        </>
    )
}