import vision from '../../resources/img/vision.png'
import backg from '../../resources/img/own_bg.webp'
import AppHeader from '../appHeader/AppHeader';
// import RandomChar from '../randomChar/RandomChar';
// import CharList from '../charList/CharList';
// import CharInfo from '../charInfo/CharInfo';
// import ErrorBoundary from '../errorBoundary/ErrorBoundary';
// import Search from "../search/Search";
import ComicsList from '../comicsList/ComicsList';
import { useState } from "react";
import CommonPage from '../commonPage/CommonPage';
import { Route, Router, BrowserRouter } from 'react-router';
import MainPage from '../pages/MainPage';

function App() {

  // const [selectedChar, setSelectedChar] = useState('')
  const [selectedElem, setSelectedElem] = useState(null)

  // const selectForInfo = (id) =>{
  //     setSelectedChar(id)
  // }

  const selectForCommonPage = (id, type='characters') =>{
    setSelectedElem({id, type})
  }

  return (
    <div className="app">
      <BrowserRouter>
        <AppHeader/>
        <main>
          <MainPage selectForCommonPage={selectForCommonPage}/>
          {/* <RandomChar/>
        <div className="char__content">
              <CharList selectForInfo={selectForInfo}/>
              <ErrorBoundary>
                <div>
                  <CharInfo selectedId={selectedChar} selectForCommonPage={selectForCommonPage}/>
                  <Search selectForCommonPage={selectForCommonPage}/> 
                </div>
              </ErrorBoundary>
        </div> */}
        <ComicsList selectForCommonPage={selectForCommonPage}/>
        <CommonPage selectedElem={selectedElem}/>
        {/* <img className="bg-decoration-own" src={backg}/> */}
        <img className="bg-decoration" src={vision} alt="vision"/>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;


