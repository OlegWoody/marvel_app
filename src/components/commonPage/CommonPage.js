import './commonPage.scss'
import { useEffect, useCallback, useState } from 'react';
import MarvelService from '../../services/MarvelServices';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import xMen from '../../resources/img/x-men.png';
import hero_banner from '../../resources/img/hero_banner.png'
import { Link } from 'react-router-dom';


const CommonPage = ({selectedElem, selectForCommonPage}) => {
    // const type='comics'
    const {loading, error, getCharactersById, getCharactersByName} = MarvelService()
    const [elem, setElem] = useState(null)
    const [listStat, setListStat] = useState(false)
    const { type, id } = selectedElem || {};
    const [charId, setChar] = useState()

    useEffect(() => {
        console.log("selectedElem:", selectedElem);
        setListStat(false);  
        setElem(null);
        if (id && type) {
            onNewId(id, type);
        }
    }, [id]);
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (listStat && !event.target.closest('.common-page__metadata-first-char')) {
                setListStat(false);
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [listStat]);

    const onNewId = (id, type = 'characters') => {
        console.log("Тут действие есть перед текущим елементом")
            getCharactersById(id, type)
                .then((res)=>{
                    console.log("Получен ответ:", res); 
                    updateElem(res)})
                .catch((error) => {
                    console.error("Ошибка при получении данных:", error);  // Логируем ошибку
                });
    }

    const updateElem = (elem) =>{
        console.log("Текущий елемент:", elem)
        console.log('Тек елеменет')
        setElem(elem);
    }

    const onClickElementName = (charId, type) => {
        selectForCommonPage(charId, type);
    }

    const CharList = ({ elementId, type }) => {
        if (!elementId || !Array.isArray(elementId) || elementId.length === 0) {
            return <li className="common-page__metadata-first-char-item">Not found</li>;
        }
    
        return elementId.map(item => {
            const baseCharId = /\/(\d+)/;
            const foundBaseCharId = baseCharId.exec(item.resourceURI);
            const elemId = foundBaseCharId ? foundBaseCharId[1] : null;
    
            return (
                <li key={item.id || elemId} onClick={() => onClickElementName(elemId, type)} className="common-page__metadata-first-char-item">
                    {elemId && <Link to={`/${type}/${elemId}`}>{item.name || 'Unknown Character'}</Link>}
                </li>
            );
        });
    };

    const View = ({elem, type}) =>{
        // if (!elem) return null;
        if (type === 'comics') {
            console.log(type)
            console.log(elem)
            console.log('1')

            let dateSale = elem.saleDate?.find(item => item.type === "onsaleDate")?.date || null;
            if (dateSale) {
                dateSale = new Date(dateSale);
            }
    
            return (
                <>
                    <h2 className="common-page__name">{elem.name || 'Unknown Name'}</h2>
                    <Link to={`/${type}`} className="common-page__back">Back to all</Link>
                    <div className='common-page__wrapper'>
                        <img 
                            src={elem.thumbnail || 'placeholder.jpg'} 
                            alt={elem.name || 'No image'} 
                            className="common-page__img"
                        />
                        <ul className='common-page__metadata'>
                            <li className='common-page__metadata-first'>
                                Author: <span>{elem.author?.find(item => item.role === "writer")?.name || 'Unknown'}</span>
                            </li>
                            <li className='common-page__metadata-first'>
                                Issue number: <span>{elem.issueNumber ?? 'Not available'}</span>
                            </li>
                            <li className='common-page__metadata-first'>
                                Characters: <span>
                                    <a 
                                        className={`common-page-button ${listStat ? 'open' : 'closed'}`} 
                                        onClick={() => setListStat(listStat => !listStat)}
                                    >
                                        Click
                                    </a>
                                </span>
                                {elem.characters?.length > 0 ? (
                                    <ul className={`common-page__metadata-first-char ${listStat ? 'open' : ''}`}>
                                        <CharList elementId={elem.characters} type='characters' />
                                    </ul>
                                ):(
                                    <ul className={`common-page__metadata-first-char ${listStat ? 'open' : ''}`}>
                                        <li className="common-page__metadata-first-char-item">
                                            N/A
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className='common-page__metadata-first'>
                                Sale date: <span>{dateSale ? dateSale.toLocaleDateString("ua-UA") : "Not found"}</span>
                            </li>
                            <li className='common-page__metadata-first'>
                                Last updated: <span>{elem.modified || 'Unknown'}</span>
                            </li>
                            <li className="common-page__metadata-first">
                                Pages count: <span>{elem.pageCount ?? 'Unknown'}</span>
                            </li>
                            <li className='common-page__metadata-first'>
                                Printed version: <span>{elem.printPrice ?? 'N/A'}</span>
                            </li>
                            <li className='common-page__metadata-first'>
                                Digital version: <span>{elem.digitalPrice ?? 'N/A'}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="common-page__info">
                        <p className="common-page__descr">{elem.fullDescription || 'No description available.'}</p>
                    </div>
                </>
            );
        } else if(type==='characters'){
            console.log(type)
            console.log(elem)
            return(
                <>
                <h2 className="common-page__name">{elem.name}</h2>
                <Link to={`/marvel_app`} className="common-page__back">Back to all</Link>
                <div className='common-page__wrapper'>
                <img src={elem.thumbnail} alt={elem.name} className="common-page__img"/>
                    <ul className='common-page__metadata'>
                        {/* <li className='common-page__metadata-first'>Author: <span>{elem.author.find(item=>item.role==="writer")?.name}</span></li> */}
                        {/* <li className='common-page__metadata-first'>Issue number: <span>{elem.issueNumber}</span></li> */}
                        <li className='common-page__metadata-first'>
                        Comics: <span><a className={`common-page-button ${listStat ? 'open' : 'closed'}`} onClick={()=>setListStat(listStat => !listStat)}>Click</a></span>
                            <ul className={`common-page__metadata-first-char ${listStat ? 'open' : ''}`}>
                                <CharList elementId={elem.comics} type='comics'/>
                            </ul>
                        </li>
                        <li className='common-page__metadata-first'>
                                Last updated: <span>{elem.modified || 'Unknown'}</span>
                            </li>
                        {/* <li className='common-page__metadata-first'>
                            Sale date: <span>{dateSale ? dateSale.toLocaleDateString("ua-UA") : "Not found"}</span>
                        </li> */}
                        {/* <li className='common-page__metadata-first'>Last updated: <span>{elem.modified}</span></li> */}
                        {/* <li className="common-page__metadata-first">Pages count: <span>{elem.pageCount}</span></li> */}
                        {/* <li className='common-page__metadata-first'>Printed version: <span>{elem.printPrice}</span></li> */}
                        {/* <li className='common-page__metadata-first'>Digital version: <span>{elem.digitalPrice}</span></li> */}
                    </ul>
                    </div>
                    <div className="common-page__info">
                        <p className="common-page__descr">{elem.fullDescription}</p>
                    </div>
                </>
            )
        }
    }
    const err = error ? <><Link to={`/marvel_app`} className="common-page__back">Back to all</Link><ErrorMessage/></>:null
    const content = elem && !(loading || error) ? <View elem={elem} type={type}/> : err
    return (
        <div>
            <div className="common-page">
                {content}
                {err}
                {loading?<Spinner/>:null}
            </div>
        </div>
    )
}

export default CommonPage;