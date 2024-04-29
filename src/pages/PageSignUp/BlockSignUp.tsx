import './BlockSignUp.css';
import Inputs from '../../components/Inputs/Inputs';
import Footer from '../../components/Footer/Footer';
import { myContext } from "../../providers/ThemeContext"
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthUser } from '../../slice/authUser';
import Spinner from '../../components/Spinner/Spinner';
import { useNavigate } from 'react-router-dom'
import { createContext } from 'react';

export default function BlockSignUp() {

    const navigate = useNavigate()

    const [color] = useContext(myContext)

    const [inputName, setInputName] = useState('')
    const [inputEmail, setinputEmail] = useState('')
    const [inputPassword, setinputPassword] = useState('')
    const [inputConfirmPassword, setinputConfirmPassword] = useState('')

    const dispatch = useDispatch<any>();

    function authObj() {
        return {
            'username': inputName,
            'email': inputEmail,
            'password': inputPassword,
            'course_group': 6
        }
    }

    function sendData() {
        dispatch(fetchAuthUser(authObj()))
    }

    const auth = useSelector((state: any) => state.authUser)

    useEffect(() => {
        if (auth.status === 'resolved') {
            navigate('/confirmation');
        } else if (auth.status === 'rejected') {
            navigate('/errorpage');
        }
    }, [auth.status, navigate]);



    return (
        <>
            <div className={`mainContainerUp${color}`}>
                <div className={`mainBlockTitleUp${color}`}>
                    <div className={`backHomeUp${color}`}> Back to home</div>
                    <div className={`textBlockUp${color}`}>Sign Up</div>
                    <div className={`containerUp${color}`}>

                        {auth.status === 'loading' ? <Spinner></Spinner> : null}

                        {auth.status === null ? <>
                            <div className={`inputsContainerUp${color}`}>
                                <Inputs
                                    id="1"
                                    legend="Name"
                                    type="text"
                                    typeInput={`default${color} focus${color} active${color}`}
                                    isDisabled={false}
                                    placeholder="Your name"
                                    inputValue={inputName}
                                    setInputValue={e => setInputName(e.target.value)}
                                ></Inputs>
                                <Inputs
                                    id="2"
                                    legend="Email"
                                    type="email"
                                    typeInput={`default${color} focus${color} active${color}`}
                                    isDisabled={false}
                                    placeholder="Your email"
                                    inputValue={inputEmail}
                                    setInputValue={e => setinputEmail(e.target.value)}
                                ></Inputs>
                                <Inputs
                                    id="3"
                                    legend="Password"
                                    type="password"
                                    typeInput={`default${color} focus${color} active${color}`}
                                    isDisabled={false}
                                    placeholder="Your password"
                                    inputValue={inputPassword}
                                    setInputValue={e => setinputPassword(e.target.value)}
                                ></Inputs>
                                <Inputs
                                    id="4"
                                    legend="Confirm Password"
                                    type="password"
                                    typeInput={`default${color} focus${color} active${color}`}
                                    isDisabled={false}
                                    placeholder="Confirm password"
                                    inputValue={inputConfirmPassword}
                                    setInputValue={e => setinputConfirmPassword(e.target.value)}
                                ></Inputs>
                                <button onClick={sendData} className={`signUpButton${color}`}>Sign Up</button>

                                <div className={`titleAvailabilityAcc${color}`}>Already have an account?
                                    <Link className='signLink' to="/signin">Sign In</Link>
                                </div>
                            </div>
                        </> : null}



                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}