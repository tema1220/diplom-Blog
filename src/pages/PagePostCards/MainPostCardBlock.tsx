import Tabs from '../../components/Tabs/Tabs';
import './MainPostCardBlock.css';
import LargeCard from '../../components/LargePostCard/LargeCard';
import SmallCard from '../../components/SmallPostCard/SmallCard';
import MediumCard from '../../components/MediumPostCard/MediumCard';
import { dataCards } from '../../components/data';
import NavigationPostCard from '../../components/NavigationPostCard/NavigationPostCard';
import Footer from '../../components/Footer/Footer';
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'


export default function MainPostCardBlock() {


    const [color] = useContext(myContext)

    const posts = useSelector((state: any) => state.posts.posts)

    return (
        <>


            <div className={`mainContainerCards${color}`}>
                <div className='mainPostCardBlock'>
                    <div className={`textBlock${color}`}>Blog</div>
                    <Tabs styleTab={`all${color}`} isDisabled={false}>All</Tabs>
                    <Link to={`/favoriteposts`}>
                        <Tabs styleTab={`favorite${color}`} isDisabled={false}>My favorites</Tabs>
                    </Link>

                    <Tabs styleTab={`popular${color}`} isDisabled={false}>Popular</Tabs>
                    <div className='greyLine'></div>




                    <div className='containerL'>
                        <div className='leftContainer'>
                            <div className='largeContainer'>
                                {posts.slice(0, 1).map((postItem: any) => (
                                    <LargeCard
                                        key={postItem.id}
                                        id={postItem.id}
                                        title={postItem.title}
                                        date={postItem.date}
                                        image={postItem.image}
                                        description={postItem.description}
                                        component={postItem}
                                    />
                                ))}
                            </div>


                            <div className='mediumContainer'>
                                <div className='leftMContainer'>


                                    {posts.slice(1, 3).map((postItem: any) => (
                                        <MediumCard
                                            id={postItem.id}
                                            title={postItem.title}
                                            date={postItem.date}
                                            description={postItem.description}
                                            image={postItem.image}
                                            component={postItem} />
                                    ))}




                                </div>

                                <div className='leftMContainer'>
                                    {posts.slice(3, 5).map((postItem: any) => (
                                        <MediumCard
                                            id={postItem.id}
                                            title={postItem.title}
                                            date={postItem.date}
                                            image={postItem.image}
                                            description={postItem.description}
                                            component={postItem} />
                                    ))}
                                </div>
                            </div>
                        </div>


                        <div className='smallContainer'>
                            {posts.slice(5, 10).map((postItem: any) => (
                                <SmallCard
                                    id={postItem.id}
                                    title={postItem.title}
                                    description={postItem.description}
                                    date={postItem.date}
                                    image={postItem.image}
                                    component={postItem} />
                            ))}
                        </div>
                    </div>




                    
                </div>
                <NavigationPostCard></NavigationPostCard>
                <Footer></Footer>
            </div>
        </>
    )
}




