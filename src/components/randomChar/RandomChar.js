import "./randomChar.scss"
import mjolnir from '../../resources/img/mjolnir.png';
import { useCallback, useEffect, useState } from "react";
import MarvelService from "../../services/MarvelServices";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const RandomChar = () =>{
    const [state, setState]=useState({})
    const {getCharactersById, loading, error} = MarvelService()

    const onCharLoaded = (char) =>{
        setState(char)
    }
    const updateChar = (id) =>{
        getCharactersById(id)
            .then(onCharLoaded)
            // .then((res)=>console.log(res))
            .catch(()=>{
                console.log('Error')
            })
    }

    const generatedId = useCallback(() =>{
        const id = Math.floor(Math.random()*(1011400 - 1011000+1)+1011000)
        updateChar(id)
    }, [])

    useEffect(()=>{
        generatedId()
    }, [generatedId])

    const errorMessage = error ? <ErrorMessage/> : null;
    const spin = (loading && !error) ? <Spinner/> : null;
    const content = !(loading || error) ? <View char={state}/> : null;

    return(
    <div className="randomchar">
        {errorMessage}
        {spin}
        {content}
        <div className="randomchar__static">
            <p className="randomchar__title">
                Random character for today!<br/>
                Do you want to get to know him better?
            </p>
            <p className="randomchar__title">
                Or choose another one
            </p>
            <button onClick={generatedId} className="button button__main">
                <div className="inner">try it</div>
            </button>
            <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
        </div>
    </div> 
    )
}

const View = ({char:{name, description, thumbnail, homepage, wiki}}) =>{
    const objFit = thumbnail==="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? "fill" : "cover";
    // const {name, description, thumbnail, homepage, wiki} = state
    return(
    <div className="randomchar__block">
        <img src={thumbnail} alt="Random character" className="randomchar__img" style={{'objectFit':objFit}}/>
        <div className="randomchar__info">
            <p className="randomchar__name">{name}</p>
            <p className="randomchar__descr">
                {description}
            </p>
            <div className="randomchar__btns">
                <a href={homepage} className="button button__main">
                    <div className="inner">homepage</div>
                </a>
                <a href={wiki} className="button button__secondary">
                    <div className="inner">Wiki</div>
                </a>
            </div>
        </div>
    </div>
    )
}

export default RandomChar;