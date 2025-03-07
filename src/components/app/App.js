import vision from '../../resources/img/vision.png';
import back from '../../resources/img/own_bg.webp';
import AppHeader from '../appHeader/AppHeader';
import ComicsList from '../comicsList/ComicsList';
import NotFound from '../notFound/NotFound';
import { useState } from "react";
import CommonPage from '../commonPage/CommonPage';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import futureBanner from '../../resources/img/future_banner.png';

function App() {
  const [selectedElem, setSelectedElem] = useState(null);

  const selectForCommonPage = (id, type = 'characters') => {
    setSelectedElem({ id, type });
  };

  return (
    <div className="app">
      <AppHeader />
      <main>
        <Routes>
          <Route path="/marvel_app" element={<MainPage selectForCommonPage={selectForCommonPage} />} />
          <Route path="/comics" element={<ComicsList selectForCommonPage={selectForCommonPage} />} />
          <Route path="/:type/:id" element={<CommonPage selectedElem={selectedElem} selectForCommonPage={selectForCommonPage}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <img className="bg-decoration-own" src={back} alt="vision"/>
    </div>
  );
}

export default App;

