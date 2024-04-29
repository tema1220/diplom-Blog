import './BlockTitle.css';
import Footer from '../../components/Footer/Footer';
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';

export default function PageTitle() {
    const [color] = useContext(myContext)

    return (
        <>

            <div className={`mainContainer${color}`}>
                <div className='mainBlockTitle'>
                    <div className={`backHome${color}`}>Back to home</div>
                    <div className={`textBlock${color}`}>Title</div>
                    <div className='container'>
                        <div className={`templateBody${color}`}>Template body</div>
                    </div>
                </div>
                <Footer></Footer>
            </div>


        </>
    )
}




