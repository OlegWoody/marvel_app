import vision from '../../resources/img/vision.png'
import AppHeader from '../appHeader/AppHeader';
import ComicsList from '../comicsList/ComicsList';
import { useState } from "react";
import CommonPage from '../commonPage/CommonPage';
import { Route, Routes, NavLink } from 'react-router';
import MainPage from '../pages/MainPage';
import futureBanner from '../../resources/img/future_banner.png'

function App() {
  const [selectedElem, setSelectedElem] = useState(null)

  const selectForCommonPage = (id, type='characters') =>{
    setSelectedElem({id, type})
  }

  return (
    <div className="app">
        <Routes>
          <Route path='/marvel_app' element={<AppHeader />} />
          <Route path='/comics' element={<AppHeader />} />
          <Route path='/:type/:id' element={<img src={futureBanner}></img>}/>
        </Routes>
        <main>
        <Routes>
          <Route path='/marvel_app' element={<MainPage selectForCommonPage={selectForCommonPage}/>}/>
          <Route path='/comics'  element={<ComicsList selectForCommonPage={selectForCommonPage}/>}/>
          <Route path='/:type/:id' element={<CommonPage selectedElem={selectedElem}/>}/>
        </Routes>
        <img className="bg-decoration" src={vision} alt="vision"/>
      </main>
    </div>
  );
}

export default App;


