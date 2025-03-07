import CharInfo from "../charInfo/CharInfo";
import CharList from "../charList/CharList";
import RandomChar from "../randomChar/RandomChar";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import Search from "../search/Search";
import './mainPage.scss'
import { useState } from "react";

const MainPage = ({selectForCommonPage}) =>{
    const [selectedChar, setSelectedChar] = useState(null)
  
    const selectForInfo = (id) =>{
        setSelectedChar(id)
    }
  
    return (
        <>
          <RandomChar selectForInfo={selectForInfo} selectForCommonPage={selectForCommonPage}/>
            <div className="char__content">
                <CharList selectForInfo={selectForInfo} selectedChar={selectedChar}/>
                <ErrorBoundary>
                    <div className="char__info__search">
                    <CharInfo selectedId={selectedChar} selectForInfo={selectForInfo} selectForCommonPage={selectForCommonPage}/>
                    <Search selectForCommonPage={selectForCommonPage}/> 
                    </div>
                </ErrorBoundary>
            </div>
        </>
    )
}

export default MainPage;