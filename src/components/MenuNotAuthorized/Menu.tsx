import './Menu.css';
import { LuSun } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';


export default function Menu({ isMenuOpen }: any) {

    const [color, setColor] = useContext(myContext);
    return (
        <>
            {isMenuOpen && (
                <div className={`mainMenuBlock${color}`} >
                    <div className='containerLink'>
                    <Link className={`home${color}`} to="/">Home</Link>
                    <Link className={`home${color}`} to="/title">Add posts</Link>
                    <Link className={`home${color}`} to="/aboutus">Profile</Link>
                    </div>
                    <div className={`bottomMainBlock${color}`}>
                        <div className='blockForDW'>

                            <button className={`lightButton${color}`} onClick={() => setColor("Light")}>
                                <LuSun className={`iconSun${color}`}></LuSun>
                            </button>

                            <button className={`darkButton${color}`} onClick={() => setColor("Dark")}>
                                <FiMoon className={`iconMoon${color}`}></FiMoon>
                            </button>

                        </div>
                        <Link className={`signIn${color}`} to="/signin">Sign in</Link>
                    </div>
                </div>
            )}
        </>
    );
}

