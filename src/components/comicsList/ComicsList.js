import './comicsList.scss';
import { useEffect, useState, useCallback, useRef } from 'react';
import MarvelService from '../../services/MarvelServices';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { Link } from 'react-router-dom';

const ComicsList = ({ selectForCommonPage }) => {
    const [comics, setComics] = useState([]);
    const [firstLoading, setFirstLoading] = useState(true);
    const { loading, error, getAllComics } = MarvelService();
    const [offSet, setOffSet] = useState(210);
    const type = 'comics';

    const renderedItem = useRef([]);

    useEffect(() => {
        renderedItem.current = [];
        getComics(offSet);
    }, []);

    const getComics = (newOffSet = offSet) => {
        getAllComics(newOffSet)
            .then(comicsLoaded);
    }

    const comicsLoaded = (newComics) => {
        setComics(comics => [...comics, ...newComics]);
        setOffSet(prevState => prevState + 8);
    }

    const onComicsNew = (newOffSet) => {
        getComics(newOffSet);
    }

    const myRef = (e, index) => {
        if (e && !renderedItem.current[index]) {
            renderedItem.current[index] = e;
        }
    }

    const View = useCallback(({ comics }) => {
        return comics.map((comic, index) => {
            const firstRenderedItem = renderedItem.current[index] ? '' : " fade-in";
            return (
                <li key={comic.id} ref={(e) => myRef(e, index)} className={`comics__item${firstRenderedItem}`}>
                    <Link to={`/${type}/${comic.id}`} onClick={() => { selectForCommonPage(comic.id, type); }}>
                        <div className="comics__item-own">
                            <img src={comic.thumbnail} alt={comic.name} className="comics__item-img" />
                            <div className="comics__item-name">{comic.name}</div>
                        </div>
                        <div className="comics__item-sub">
                            <div className="comics__item-sub-price">{comic.printPrice}</div>
                            <data className="comics__item-sub-data">{comic.modified}</data>
                        </div>
                    </Link>
                </li>
            );
        });
    }, []);

    const content = comics.length ? <View comics={comics} /> : null;
    const load = loading ? <Spinner /> : null;
    const err = error ? <ErrorMessage /> : null;

    return (
        <div className="comics__list">
            <ul className="comics__grid">
                {content}
            </ul>
            {load}
            {err}
            <button onClick={() => onComicsNew(offSet)} disabled={loading} className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    );
}

export default ComicsList;
