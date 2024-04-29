import './LargeCard.css';
import { useState, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { dataCards } from "../data"
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../slice/slice'
import { IPostCard } from '../../types/interface';
import { addToFav } from '../../slice/slice';
import { BiSolidBookmark } from "react-icons/bi";
import { fetchData } from '../../slice/postSlice';

export default function LargeCard({ id, title, date, image, description, component }: IPostCard) {
    const [color] = useContext(myContext)


    //date
    const formattedDate = (date: any) => {
        if (!date) {
            return 'er';
        }
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const [year, month, day] = date.split('-');
           return `${months[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
    };



    const dispatch = useDispatch<any>()
    function addFavorite() {
        dispatch(addToFav(component))
    }

    //counter
    const count = useSelector((state: any) => state.counter.value)




    //hover 
    const [isHovered, setIsHovered] = useState(false);

    const icon = isHovered ? <BiSolidBookmark className={`bookMarkIconFav${color}`} /> : <FiBookmark className={`bookMarkIcon${color}`} />;

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <div className={`mainLargeCardBlock${color}`} >
                <Link className='mainTopBlock' to={`/${id}`}>


                    <div className='blockWitnText'>
                            <div>
                                <div className='date'>{formattedDate(date)}</div>
                                <div key={id}>
                                    <Link className={`title${color}`} to={`/${id}`}>{title}</Link>
                                </div>
                                <div className='description'>{description}</div>
                            </div>
                    </div>

                    

                    <div className=' blockWithImage'>
                    <img src={image} className='imageSize' />
                    </div>
                </Link>


                <div className='mainIconsBlock'>

                    <div className='likeBlock'>
                        <AiOutlineLike className={`likeIcon${color}`} onClick={() => dispatch(increment())} />
                        <div className={`counter${color}`}>{count}</div>

                        <BiDislike className={`likeIcon${color}`}></BiDislike>
                    </div>



                    <div className='saveBlock'>
                        <div
                            className={`bookMarkIcon${color}`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={addFavorite}
                            style={{ cursor: 'pointer' }}>{icon}</div>
                        <IoEllipsisHorizontal className={`ellipsisIcon${color}`}></IoEllipsisHorizontal>
                    </div>

                </div>
            </div>
        </>
    )
}

