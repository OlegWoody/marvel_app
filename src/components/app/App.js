import vision from '../../resources/img/vision.png'
import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import Search from "../search/Search";
import ComicsList from '../comicsList/ComicsList';
import { useState } from "react";

function App() {

  const [selectedChar, setSelectedChar] = useState('')

  const selectForInfo = (id) =>{
      setSelectedChar(id)
  }

  return (
    <div className="app">
      <AppHeader/>
      <main>
        <RandomChar/>
      {/* <div className="char__content">
            <CharList selectForInfo={selectForInfo}/>
            <ErrorBoundary>
              <div>
                <CharInfo selectedId={selectedChar}/>
                <Search/> 
              </div>
            </ErrorBoundary>
      </div> */}
      <ComicsList/>
      
        <img className="bg-decoration" src={vision} alt="vision"/>
      </main>
    </div>
  );
}

export default App;


