import Tabs from '../../components/Tabs/Tabs';
import './MainPostCardBlock.css';
import MediumCard from '../../components/MediumPostCard/MediumCard';
import NavigationPostCard from '../../components/NavigationPostCard/NavigationPostCard';
import Footer from '../../components/Footer/Footer';
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'


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
                            <div className='mediumContainer'>
                                <div className='leftMContainer'>


                                    {posts.slice(1, 4).map((postItem: any) => (
                                        <MediumCard
                                            id={postItem.id}
                                            key={postItem.id}
                                            title={postItem.title}
                                            date={postItem.date}
                                            description={postItem.description}
                                            image={postItem.image}
                                            component={postItem} />
                                    ))}
                                </div>
                                <div className='leftMContainer'>
                                {posts.slice(5, 8).map((postItem: any) => (
                                        <MediumCard
                                            id={postItem.id}
                                            key={postItem.id}
                                            title={postItem.title}
                                            date={postItem.date}
                                            description={postItem.description}
                                            image={postItem.image}
                                            component={postItem} />
                                    ))}
                                </div>
                                <div className='leftMContainer'>
                                    {posts.slice(9, 12).map((postItem: any) => (
                                        <MediumCard
                                            id={postItem.id}
                                            key={postItem.id}
                                            title={postItem.title}
                                            date={postItem.date}
                                            image={postItem.image}
                                            description={postItem.description}
                                            component={postItem} />
                                    ))}
                                </div>
                                
                                

                            </div>
                        </div>
                    </div>




                    
                </div>
                <NavigationPostCard></NavigationPostCard>
                <Footer></Footer>
            </div>
        </>
    )
}




