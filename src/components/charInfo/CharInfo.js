import './charInfo.scss'
import thor from "../../resources/img/thor.jpeg"
import skeleton from '../skeleton/skeleton'
import { useState, useCallback, useEffect } from 'react'
import MarvelService from '../../services/MarvelServices'
import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/ErrorMessage'
import { Link } from 'react-router-dom';

const CharInfo = ({selectForCommonPage, selectedId}) =>{
    // const marvelService = new MarvelService()
    const [char, setChar] = useState({})
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)
    const [selected, setSelected] = useState(false)
    const [comicId, setComicId] = useState(null)
    const {getComicsByName, getCharactersById, loading, error} = MarvelService()
    const type='characters'

    useEffect(()=>{
        if(selectedId !== null && selectedId !== undefined && selectedId !== ""){
            onCharLoad(selectedId)
            // setError(false)
            setSelected(true)
            // setSelected(false)
        }
    }, [selectedId])

    const onCharLoad = (selected) =>{
        // setLoading(true)
        getCharactersById(selected)
            .then(onCharLoaded)
            .catch(()=>{
                // setError(true)
                // setLoading(false)
            })
    }

    const onCharLoaded = (res) =>{
        setChar(res)
        // setLoading(false)
    }

    const onClickComics = (url) => {
        const searchId= /(\d+)$/
        const myId = searchId.exec(url)
        const comicsId = myId === null ? 0 : myId[1]
        selectForCommonPage(comicsId, 'comics')
    };
    

    const InfoChar = ({char}) => {
        const {id,name,thumbnail,description,wiki, homepage, comics, objStyle } = char
        return(
            <>
                <div className="char__basics">
                    <img src={thumbnail} alt={name} style={objStyle}/>
                    <div>
                        <div className="char__info-name">{name}</div>
                        <div className="char__btns">
                            <Link
                            to={`/${type}/${id}`} 
                            // href={wiki}
                            onClick={()=>selectForCommonPage(id)}
                             className="button button__secondary">
                                <div className="inner">Details</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="char__descr">
                    {description}
                </div>
                <div className="char__comics">Comics:</div>
                <ul className="char__comics-list">
                    {comics && comics.length > 0 ? comics.map((comic,index) => (
                    <li key={index} onClick={()=>{onClickComics(comic.resourceURI)}} className="char__comics-item">
                        <Link to={`/comics/${comic.resourceURI.match(/(\d+)$/)?.[1]}`}>
                            {comic.name}
                        </Link>
                    </li>
                    )) : <li>No comics available</li>}
                </ul> 
            </>
        )
    }

    // const comics = (comicsArr) =>{
    //     return comicsArr.map(comics=>{
    //         return (
    //             <li className="char__comics-item">
    //                 {comics.name}
    //             </li>
    //         )
    //     })

    // }

    const err = error ? <ErrorMessage/> : null
    const load = loading ? <Spinner/> : null;
    const skelet = selected ? null : skeleton()
    const content = (!loading && selected && !error) ? <InfoChar char={char}/> : null

    return(    
        <div className="char__info">
            {err}
            {load}
            {skelet}
            {content}
        </div>
    )
}

export default CharInfo;