import CharInfo from "../charInfo/CharInfo";
import CharList from "../charList/CharList";
import RandomChar from "../randomChar/RandomChar";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import Search from "../search/Search";
import { useState } from "react";

const MainPage = ({selectForCommonPage}) =>{
    const [selectedChar, setSelectedChar] = useState('')
  
    const selectForInfo = (id) =>{
        setSelectedChar(id)
    }
  

    return (
        <>
          <RandomChar/>
            <div className="char__content">
                <CharList selectForInfo={selectForInfo}/>
                <ErrorBoundary>
                    <div>
                    <CharInfo selectedId={selectedChar} selectForCommonPage={selectForCommonPage}/>
                    <Search selectForCommonPage={selectForCommonPage}/> 
                    </div>
                </ErrorBoundary>
            </div>
        </>
    )
}

export default MainPage;