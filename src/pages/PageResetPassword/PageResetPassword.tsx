import './PageRecetPassword.css';
import Inputs from '../../components/Inputs/Inputs';
import Footer from '../../components/Footer/Footer';
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function BlockSignIn() {

    const [color] = useContext(myContext)
    return (
        <>
            <div className={`mainContainerRP${color}`}>
                <div className={`mainBlockTitleRP${color}`}>
                    <div className={`backHomeRP${color}`}>Back to home</div>
                    <div className={`textBlockRP${color}`}>Reset Password</div>
                    <div className={`containerRP${color}`}>
                        <div className={`inputsContainerRP${color}`}>
                            {/* <Inputs
                                id="2"
                                legend="Email"
                                type="email"
                                typeInput={`default${color} focus${color} active${color}`}
                                isDisabled={false}
                                placeholder="Your email"
                                // value={inputValue}
                                // onChange={setInputValue}
                            ></Inputs> */}
                            <button className='resetButton'>Reset</button>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}