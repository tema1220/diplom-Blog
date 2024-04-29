/* eslint-disable jsx-a11y/anchor-is-valid */
import './BlockSignIn.css';
import Inputs from '../../components/Inputs/Inputs';
import Footer from '../../components/Footer/Footer';
import { myContext } from "../../providers/ThemeContext"
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BlockSignIn() {

    const [color] = useContext(myContext)

    const [inputName, setInputName] = useState('')
    return (
        <>
            <div className={`mainContainerIn${color}`}>
                <div className={`mainBlockTitleIn${color}`}>
                    <div className={`backHomeIn${color}`}>Back to home</div>
                    <div className={`textBlockIn${color}`}>Sign In</div>
                    <div className={`containerIn${color}`}>
                        <div className={`inputsContainerIn${color}`}>
                            <Inputs
                                id="2"
                                legend="Email"
                                type="email"
                                typeInput={`default${color} focus${color} active${color}`}
                                isDisabled={false}
                                placeholder="Your email"
                                inputValue={inputName}
                                setInputValue={e => setInputName(e.target.value)}
                            ></Inputs>
                            <Inputs
                                id="3"
                                legend="Password"
                                type="password"
                                typeInput={`default${color} focus${color} active${color}`}
                                isDisabled={false}
                                placeholder="Your password"
                                inputValue={inputName}
                                setInputValue={e => setInputName(e.target.value)}
                            ></Inputs>
                            <a href="" className={`forgotPass${color}`}>Forgot password?</a>
                            <button className='signUpButton'>Sign In</button>

                            <div className={`titleAvailabilityAcc${color}`}>Don't hane an account?
                                <Link className='signLink' to="/signup">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}