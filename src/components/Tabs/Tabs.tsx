import './Tabs.css';
import { ITabs } from '../../types/interface';

export default function Tabs({ children, styleTab, isDisabled }: ITabs) {

    return (
        <>
            <button
                disabled={isDisabled}
                className={styleTab}
            >{children}</button >
        </>
    )
}



