import './commonPage.scss'
import { useEffect, useCallback, useState } from 'react';
import MarvelService from '../../services/MarvelServices';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import xMen from '../../resources/img/x-men.png';
import hero_banner from '../../resources/img/hero_banner.png'
import { Link } from 'react-router';


const CommonPage = ({selectedElem}) => {
    // const type='comics'
    const {loading, error, getCharactersById} = MarvelService()
    const [elem, setElem] = useState(null)
    const { type, id } = selectedElem || {};

    useEffect(()=>{
        onNewId(id, type)
    }, [id])

    const onNewId = (id, type='characters') =>{
        getCharactersById(id, type)
            .then(updateElem)
            .catch(()=>{})

    }

    const updateElem = (elem) =>{
        // console.log(elem)
        setElem(elem);
    }

    const View = ({elem, type}) =>{
        if (!elem) return null;
        if (type==='comics'){
            return(
                <>
                    <img src={elem.thumbnail} alt={elem.name} className="common-page__img"/>
                    <div className="common-page__info">
                        <h2 className="common-page__name">{elem.name}</h2>
                        <p className="common-page__descr">{elem.description}</p>
                        <p className="common-page__descr">Pages count: {elem.pageCount}</p>
                        {/* <p className="common-page__descr">Language: {elem.language}</p> */}
                        <div className="common-page__price"><span className="common-page__price-text">Printed version:</span> {elem.printPrice}</div>
                        <div className="common-page__price"><span className="common-page__price-text">Digital version</span>: {elem.digitalPrice}</div>
                    </div>
                    <Link to={`/${type}`} className="common-page__back">Back to all</Link>
                </>
            )
        } else if(type==='characters'){
            return(
                <>
                    <img src={elem.thumbnail} alt={elem.name} className="common-page__img"/>
                    <div className="common-page__info">
                        <h2 className="common-page__name">{elem.name}</h2>
                        <p className="common-page__descr">{elem.fullDescription}</p>
                        {/* <p className="common-page__descr">144 pages</p> */}
                        {/* <p className="common-page__descr">Language: en-us</p> */}
                        {/* <div className="common-page__price">9.99$</div> */}
                    </div>
                    <Link to={`/marvel_app`} className="common-page__back">Back to all</Link>
                </>
            )
        }
    }

    const content = elem && !(loading && error) ? <View elem={elem} type={type}/> : null
    const err = error ? <><Link to={`/marvel_app`} className="common-page__back">Back to all</Link><ErrorMessage/></>:null
    return (
        <div>
            <div className="common-page">
                {/* {loading?<Spinner/>:null}
                {error?<ErrorMessage/>:null} */}
                {content}
            </div>
            {loading?<Spinner/>:null}
            {err}
        </div>
    )
}

export default CommonPage;