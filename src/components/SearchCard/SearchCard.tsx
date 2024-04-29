/* eslint-disable jsx-a11y/alt-text */
import './SearchCard.css';
import { useState, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { dataCards } from "../data"
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';


export default function SearchCard() {
    const [color] = useContext(myContext)

    const originalDate = [dataCards[7]].map((item) => (item.date));
    let DateString = String(originalDate)
    const dateObj = new Date(DateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedDate = `${months[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;

    //image
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {

        async function fetchImage() {
            let response = await fetch('https://loremflickr.com/320/240/space');
            let blob = await response.blob();
            let url = URL.createObjectURL(blob);
            setImageUrl(url);
        }
        fetchImage();
    }, []);


    let [count, setCount] = useState(0)
    return (
        <>
            <div className={`mainSearchCardBlock${color}`}>
                <div className='mainTopBlockSR'>

                    <div className=' blockWithImageSR'>{imageUrl && <img src={imageUrl}
                        className='imageSizeSR' />}
                    </div>

                    <div className='textBlockSR'>
                        {[dataCards[7]].map((item) => (
                            <div key={item.id}>
                                <div className='dateSR'>{formattedDate}</div>
                                <div className={`titleSR${color}`}>{item.title}</div>
                            </div>
                        ))}

                    </div>
                </div>


                <div className='mainIconsBlockSR'>

                    <div className='likeBlockSR'>
                        <AiOutlineLike className={`likeIconSR${color}`} onClick={() => setCount(count + 1)} />
                        <div className={`counterSR${color}`}>
                            {count}
                        </div>
                        <BiDislike className={`likeIconSR${color}`}></BiDislike>
                    </div>

                    <div className='saveBlockSR'>
                        <FiBookmark className={`bookMarkIconSR${color}`}></FiBookmark>
                        <IoEllipsisHorizontal className={`ellipsisIconSR${color}`}></IoEllipsisHorizontal>
                    </div>

                </div>
            </div>
        </>
    )
}

