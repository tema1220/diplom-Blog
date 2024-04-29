import '../PageSearchResults/PageSearchResults.css';
import SmallCard from '../../components/SmallPostCard/SmallCard';
import { dataCards } from '../../components/data';
import NavigationPostCard from '../../components/NavigationPostCard/NavigationPostCard';
import Footer from '../../components/Footer/Footer';
import { myContext } from "../../providers/ThemeContext"
import { useContext } from 'react';
import SearchCard from '../../components/SearchCard/SearchCard';



export default function MainPostCardBlock() {

    const [color] = useContext(myContext)

    return (
        <>
            <div className={`mainContainerSearch${color}`}>
                <div className='mainSearchBlock'>
                    <div className={`searchTextBlock${color}`}>Search results ‘Astronauts’</div>
                    <div className='smallSearchContainer'>
                        {dataCards.slice(0, dataCards.length - 4).map(item => (
                            <SearchCard key={item.id} />
                        ))}
                    </div>
                    <NavigationPostCard></NavigationPostCard>
                    <Footer></Footer>
                </div>
            </div>
        </>
    )
}

