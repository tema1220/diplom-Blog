import Footer from '../../components/Footer/Footer';
import './BlockSuccess.css';
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';

export default function BlockSuccsess() {
    const [color] = useContext(myContext)

    return (
        <>
            <div className={`mainContainerSuccess${color}`}>
                <div className='mainBlockSuccessTitle'>
                    <div className={`backHomeSuccess${color}`}>Back to home</div>
                    <div className={`textBlockSuccess${color}`}>Success</div>
                    <div className={`containerSuccess${color}`}>
                        <div className={`informationContainerSuccess${color}`}>

                            <div className={`regDescription${color}`}>
                            Email confirmed.
                                <br />Your registration is now completed
                            </div>
                            <button className='signUpButton'>Go to home</button>
                        </div>
                    </div>
                </div>
<Footer></Footer>
            </div>
        </>
    )
}