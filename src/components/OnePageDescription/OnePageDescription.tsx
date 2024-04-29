import '../../pages/PageContentBlock/BlockContentPage.css';
import '../../components/NavigationPostCard/NavigationPostCard.css';
import { IOnePageDescription } from '../../types/interface';
import { useContext } from 'react';
import { myContext } from '../../providers/ThemeContext';


export default function OnePageDescription({children}:IOnePageDescription) {

    const [color] = useContext(myContext)
    return (
        <>
            <div className='onePageDescriptionContainer'>
                <div className='onePageDescription'>  
                </div>
            </div>
            <div className='onePageDescriptionContainer'>
                <div className={`onePageDescription${color}`}>
                            <div className='descriptionStyle'>{children}</div>
                </div>
            </div>
        </>
    )
}


