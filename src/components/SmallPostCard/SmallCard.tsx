/* eslint-disable jsx-a11y/alt-text */
import './SmallCard.css';
import { useState, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';
import { IPostCard } from '../../types/interface';
import { Link } from 'react-router-dom';
import { addToFav } from '../../slice/slice';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../slice/slice'
import { BiSolidBookmark } from "react-icons/bi";



export default function SmallCard({ id, title, date, image, component }: IPostCard) {
    const [color] = useContext(myContext)

    //date
    const formattedDate = (date: any) => {
        if (!date) {
            return 'у тебя дата ундефинед';
        }
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const [year, month, day] = date.split('-');
            return `${months[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
    };


    //закладка
    const dispatch = useDispatch<any>()
    function addFavorite() {
        dispatch(addToFav(component))
    }

    const count = useSelector((state: any) => state.counter.value)



    //hover Для закладки
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
            <div className={`mainSmallCardBlock${color}`}>
                <div className='mainTopBlockS'>


                    <div className='blockWitnTextS'>
                            <div>
                            <div className='dateS'>{formattedDate(date)}</div>
                                <div key={id}>
                                    <Link className={`titleS${color}`} to={`/${id}`}>{title}</Link>
                                </div>
                            </div>
                    </div>


                    <div className=' blockWithImageS'>
                        <img src={image} className='imageSizeS' />
                    </div>
                </div>




                <div className='mainIconsBlockS'>

                    <div className='likeBlockS'>
                        <AiOutlineLike className={`likeIconS${color}`} onClick={() => dispatch(increment())} />
                        <div className={`counterS${color}`}>
                            {count}
                        </div>

                        <BiDislike className={`likeIconS${color}`}></BiDislike>
                    </div>

                    <div className='saveBlockS'>
                        <div
                            className={`bookMarkIcon${color}`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={addFavorite}
                            style={{ cursor: 'pointer' }}>{icon}</div>
                        <IoEllipsisHorizontal className={`ellipsisIconS${color}`}></IoEllipsisHorizontal>
                    </div>

                </div>
            </div>
        </>
    )
}

