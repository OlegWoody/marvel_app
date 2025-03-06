import './charList.scss'
import MarvelService from '../../services/MarvelServices';
import { useState, useEffect, memo, useRef } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage'

const CharList = ({selectForInfo, selectedChar}) => {
    const [char, setChar] = useState([])
    const [firstLoading, setFirstLoading] = useState(false)
    const [offSet, setOffSet] = useState(290)
    // const [activeChar, setActiveChar] = useState(null)
    const { getAllCharacters, loading, error } = MarvelService()

    const currentRef = useRef([])

    useEffect(() => {
        currentRef.current = [];
        updateChar(offSet, true)
    }, [])

    const updateChar = (offset, initialRender = false) => {
        if (initialRender) {
            setFirstLoading(true);
        }
        getAllCharacters(offset)
            .then(res => {onCharLoaded(res)
            setFirstLoading(false)})
            .catch(() => {
                console.log("Error on getAllCharacters")
                setFirstLoading(false);
            })
    }

    const onCharLoaded = (newChar) => {
        if (newChar.length === 0) return; 
        setFirstLoading(false)
        setOffSet(prev => prev + 9);
        setChar(prevChar => [...prevChar, ...newChar])
    }

    const onClickChar = (charId, index) => {
        selectForInfo(charId)
        currentRef.current[index].focus()
        currentRef.current[index].scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        // setActiveChar(charId)
    }

    const myRef = (e, index) => {
        if (e && !currentRef.current[index]) {
            currentRef.current[index] = e
        }
    }

    const View = memo(({ char }) => {
        return char.map((char, index) => {
            const animation = currentRef.current[index] ? "" : "char__item_animate"
            return (
                <li className={selectedChar === char.id ? "char__item char__item_selected" : `char__item ${animation}`}
                    tabIndex={index}
                    ref={(e) => myRef(e, index)}
                    onClick={() => onClickChar(char.id, index)}
                    id={char.id}
                    key={char.id}>
                    <img src={char.thumbnail} alt={char.name} style={char.objStyle} />
                    <div className="char__name">{char.name}</div>
                </li>
            );
        });
    }, [])

    const content = !firstLoading ? <View char={char} /> : null

    return (
        <div className="char__list">
            <ul className="char__grid">
                {content}
            </ul>
            {error ? <ErrorMessage /> : null}
            {(loading && !error) ? <div style={{ "gridColumn": "2" }}><Spinner /></div> : null}
            <button onClick={() => updateChar(offSet)} className="button button__main button__long" disabled={loading}>
                <div className="inner">{loading ? "Loading..." : "Load more"}</div>
            </button>
        </div>
    )
}

export default CharList;
