import './Footer.css';

import { LuSun } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

export default function Footer() {
    const [color, setColor] = useContext(myContext);
    
    return (
        <>
                <div className='mainMenuBlock${color}'>
                    <div className='yearBlogfolio'>©2024 Blogolog</div>
                    
        
  
           
                {/* <div className={`mainMenuBlock${color}`} > */}

                    <div className={`bottomMainBlock${color}`}>
                        <div className='blockForDW'>

                            <button className={`lightButton${color}`} onClick={() => setColor("Light")}>
                                <LuSun className={`iconSun${color}`}></LuSun>
                            </button>

                            <button className={`darkButton${color}`} onClick={() => setColor("Dark")}>
                                <FiMoon className={`iconMoon${color}`}></FiMoon>
                            </button>

                        </div>
                        
                    </div>
                {/* </div> */}
            
      
                    {/* <div className='reservedRights'>All rights reserved</div> */}
                </div>
                </>
    )
}