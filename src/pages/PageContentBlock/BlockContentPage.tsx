/* eslint-disable jsx-a11y/alt-text */
import './BlockContentPage.css';
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import '../../components/NavigationPostCard/NavigationPostCard.css';
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import OnePageDescription from '../../components/OnePageDescription/OnePageDescription';
import { useContext, useEffect } from 'react';
import { myContext } from '../../providers/ThemeContext';
import { useSelector, useDispatch } from 'react-redux'
import { fetchOnePost } from '../../slice/postSlice';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';


export default function BlockContentPage() {
    const { id } = useParams();

    const dispatch = useDispatch<any>()
    
    useEffect(() => {
        if (typeof id === 'string') {
            dispatch(fetchOnePost(id))
        }
    }, [dispatch, id])

    const onepost = useSelector((state: any) => state.posts.onePost)

    const [color] = useContext(myContext)


    return (
        <>


            <div className={`mainOnePageContainer${color}`}>
                {onepost ? (
                    <div className='mainContainer'>
                        <div className='mainContainer'>

                            <div className='homeLinkBlock'>

                                <div className={`homeLink${color}`}>Home</div>
                                <div className='stick'>|</div>
                                <div className='postNumber'>
                                    <div key={onepost.id}>
                                        <div className='post_num'>Post {onepost.lesson_num}</div>
                                    </div>
                                </div>
                            </div>


                            <div className={`OnePageContainerTitle${color}`}>
                                <div key={onepost.id}>
                                    <div className='title'>{onepost.title}</div>
                                </div>
                            </div>


                            <div className='onePageImageCotainer'>
                                {onepost.image && <img src={onepost.image} className='OnePageImage' />}
                            </div>


                            <OnePageDescription>
                                <div key={onepost.id}>
                                    <div className='descriptionStyle'>{onepost.description}</div>
                                </div>
                            </OnePageDescription>


                            <div className='reactionsOnePageBlockContainer'>
                                <div className='reactionsOnePageBlock'>
                                    <div className='containerMark'>
                                        <div className={`likeButton${color}`}><AiOutlineLike className={`iconSize${color}`}></AiOutlineLike></div>
                                        <div className={`dislikeButton${color}`}><BiDislike className={`iconSize${color}`}></BiDislike></div>
                                    </div>
                                    <div className={`addToFav${color}`}>
                                        <FiBookmark className='iconBookMarkSize'></FiBookmark>
                                        Add to favorites
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`mainOneBlockNavigation${color}`}>
                            <div className='prevContainer'>
                                <div className="arrowLeft">
                                    <HiArrowLeft className={`iconArrLeftPrev${color}`}></HiArrowLeft>
                                </div>
                                <div className='textPrevContainer'>
                                    <div className={`titlePrev${color}`}>Prev</div>
                                    <div className='descriptionPrev'>10 Things to Know About Salvador Dalí</div>
                                </div>
                            </div>

                            <div className='nextContainer'>
                                <div className='textNextContainer'>
                                    <div className={`titlePrev${color}`}>Next</div>
                                    <div className='descriptionPrev'>8 Beautiful Villas Belonging to Artists You Need to See</div>
                                </div>
                                <div className="arrowRight">
                                    <HiArrowRight className={`iconArrRightNext${color}`}></HiArrowRight>
                                </div>
                            </div>
                        </div>

                    </div>
                ) : (
                    <Spinner></Spinner>
                )}
            </div>
        </>
    )

}