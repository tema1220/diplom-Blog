import './UserName.css';
import { FiSearch } from "react-icons/fi";
import { IUser } from '../../types/interface';
import { Link } from 'react-router-dom';

export default function UserName({ username, initials, }: IUser) {
    return (
        <>


            <div className='mainBlue'>
                <Link className='searchBlock' style={{ cursor: 'pointer' }} to = "/search">
                    <FiSearch className='iconSearch'></FiSearch>
                </Link>


                <div className='square'>{initials}</div>
                <div className='secondBlue'>{username}</div>
            </div>
        </>
    );
}
