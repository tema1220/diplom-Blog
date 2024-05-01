import './PageFavoritePosts.css';
import { ReactNode } from 'react';
import { useState, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { dataCards } from '../../components/data';
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../slice/slice'
import { BiSolidBookmark } from "react-icons/bi";
import Tabs from '../../components/Tabs/Tabs';

export default function PageFavoritePosts() {

    const [color] = useContext(myContext)

    //date
    const formattedDate = (date: any) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const [year, month, day] = date.split('-');
        return `${months[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
    };



    const count = useSelector((state: any) => state.counter.value)
    const dispatch = useDispatch()


    const favArray = useSelector((state: any) => state.counter.favArray);


    const [arrayText, setArrayText] = useState<ReactNode>(null);

    const toggleText = () => {
        setArrayText(
            favArray.length > 0 ? (
                <div className='favoriteContainer'>
                    {favArray.map((item: any) => (
                        <div className={`mainFavCardBlock${color}`} key={item.id} >
                            <div className='blockWithImageFav'>
                                <div>{<img src={item.image} className='imageSizeFav' />}</div>
                            </div>

                            <div className='blockWithTextFav'>
                                <div className='dateFav'>{formattedDate(item.date)}</div>
                                <Link className={`titleM${color}`} to={`/${item.id}`}>{item.title}</Link>
                            </div>

                            <div className='mainIconsBlockFav'>
                                <div className='likeBlockFav'>
                                    <AiOutlineLike className={`likeIconFav${color}`} onClick={() => dispatch(increment())} />
                                    <div className={`counterFav${color}`}>{count}</div>

                                    <BiDislike className={`likeIconFav${color}`} />
                                </div>
                                <div className='saveBlockFav'>
                                    <BiSolidBookmark className={`bookMarkIconFav${color}`} />
                                    <IoEllipsisHorizontal className={`ellipsisIconFav${color}`} />
                                </div>
                            </div >
                        </div >
                    ))}
                </div>
            ) : (
                
                <div className='noPosts'>
                    <h1 className="here">We haven't found your favorite posts</h1>
                    <img src={require("../../assets/maxresdefault.jpg")} alt="" />
                    <h1 className="here">Find something exciting for yourself <Link className="hereLink" to="/">here</Link></h1>
                </div>
            )
        );
    }

    useEffect(() => {
        toggleText();
    }, [favArray]);


    return (
        <>

            <div className={`mainContainerCards${color}`}>
                <div className='mainPostCardBlock'>
                    <div className={`textBlock${color}`}>Favorite posts</div>
                    <Link to={`/`}>
                        <Tabs styleTab={`all${color}`} isDisabled={false}>All</Tabs>
                    </Link>
                    <Link to={`/favoriteposts`}>
                        <Tabs styleTab={`favorite${color}`} isDisabled={false}>My favorites</Tabs>
                    </Link>

                    <Tabs styleTab={`popular${color}`} isDisabled={false}>Popular</Tabs>

                    <div>{arrayText}</div >
                </div >
            </div >
        </>
    )
}

