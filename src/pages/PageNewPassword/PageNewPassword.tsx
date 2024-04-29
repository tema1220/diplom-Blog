import '../PageNewPassword/PageNewPassword.css';
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
                    <div className={`textBlockRP${color}`}>New Password</div>
                    <div className={`containerRP${color}`}>
                        <div className={`inputsContainerNew${color}`}>
                            {/* <Inputs
                                id="3"
                                legend="Password"
                                type="password"
                                typeInput={`default${color} focus${color} active${color}`}
                                isDisabled={false}
                                placeholder="Your password"
                            ></Inputs>
                            <Inputs
                                id="4"
                                legend="Confirm password"
                                type="password"
                                typeInput={`default${color} focus${color} active${color}`}
                                isDisabled={false}
                                placeholder="Confirm your password"
                            ></Inputs> */}
                            <button className='resetButton'>Set Password</button>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}