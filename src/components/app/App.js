import vision from '../../resources/img/vision.png'
import back from '../../resources/img/own_bg.webp'
import AppHeader from '../appHeader/AppHeader';
import ComicsList from '../comicsList/ComicsList';
import NotFound from '../notFound/NotFound';
import { useState } from "react";
import CommonPage from '../commonPage/CommonPage';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import futureBanner from '../../resources/img/future_banner.png'

function App() {
  const [selectedElem, setSelectedElem] = useState(null)

  const selectForCommonPage = (id, type='characters') =>{
    setSelectedElem({id, type})
  }

  // не реализовано еще:
  // анимации, смена визуала у карточек
  // Смена визуала у комиксов
  // Страничка персонажа, дополнительно кнопка Back to All
  // Поисковик изменить визуал
  // баннер
  // фон, кнопки
  // random char
  // для ошибки и для спинера другие гифки
  // другой скелетон

  // ДОБАВИТЬ КНОПКЕ СВОЙСВТО DISABLED ДЛЯ КОМИКСОВ
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
          <Route path='*' element={<NotFound />}/>
        </Routes>

        <img className="bg-decoration-own" src={back} alt="vision"/>
        {/* <img className="bg-decoration" src={vision} alt="vision"/> */}
      </main>
    </div>
  );
}

export default App;


