import './comicsList.scss';
import { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import MarvelService from '../../services/MarvelServices';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const ComicsList = () => {
    const [comics, setComics] = useState([])
    const [firstLoading, setFirstLoading] = useState(true)
    const {loading, error, getAllComics}=MarvelService()
    const [offSet, setOffSet] = useState(210)

    useEffect(()=>{
        renderedItem.current = [];
        getComics()
    }, [])
    
    const renderedItem = useRef([])

    const getComics = (newOffSet=offSet) =>{
        getAllComics(newOffSet)
            .then(comicsLoaded)
    }

    const comicsLoaded = (newComics) =>{
        setComics(comics=>[...comics, ...newComics])
        setOffSet(state=>state+=8)
    }

    const onComicsNew = (newOffSet) =>{
        getComics(newOffSet)
    }

    const myRef = (e, index) =>{
        if(e && !renderedItem.current[index]){
            renderedItem.current[index] = e
        }
    }

    const View = useCallback(({comics}) =>{
        console.log(renderedItem.current)
        return comics.map((comic, index)=>{
            const firstRenderedItem = renderedItem.current[index] ? '' : " fade-in";
            return(
                <li 
                key={index}
                ref={(e)=>myRef(e, index)}
                className={`comics__item${firstRenderedItem}`}
                // ЗАМЕТКА ДЛЯ СЕБЯ. НЕ ЗАБУДЬ КЛАСС ПРОВЕРИТЬ БЛИН
                >
                    

                    <a href="#">
                        <img src={comic.thumbnail} alt={comic.name} className="comics__item-img"/>
                        <div className="comics__item-name">{comic.name}</div>
                        <div className="comics__item-price">{comic.price}</div>
                    </a>

                </li>
            )
        }, [])
        // return(
        //     <li className="comics__item">
        //         <a href="#">
        //             <img src={comics.thumbnail} alt={comics.name} className="comics__item-img"/>
        //             <div className="comics__item-name">{comics.name}</div>
        //             <div className="comics__item-price">{comics.price}</div>
        //         </a>
        //     </li>
        // )
    })

    const content = comics.length ? <View comics={comics} /> : null
    const load = loading ? <Spinner/> : null
    const err = error ? <ErrorMessage/> : null
    return (
        <div className="comics__list">
            <ul className="comics__grid">
                {content}
            </ul>
            {load}
            {err} 
            <button onClick={()=>onComicsNew(offSet)} className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;