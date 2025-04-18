import './search.scss';
import { useState, useCallback } from 'react';
import MarvelService from '../../services/MarvelServices';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { Link } from 'react-router-dom';

const Search = ({selectForCommonPage}) => {
    const [char, setChar]=useState(null)
    const [required, setRequired]=useState(false)
    const {loading, error, getCharactersByName} = MarvelService()
    const type='characters'

    const startSearch = (name) =>{
        setChar(null)
        getCharactersByName(name)
            .then(completeSearch)
            .catch(() => setChar(null));
    }

    const completeSearch = (res) => {
        if (res && res.name) {
            setChar(res);
        } else {
            setChar({ name: null });
        }
    };
    

    const onSubmitName = (e) => {
        e.preventDefault();
        setRequired(false);
        const searchVal = e.target.name.value;
        if (searchVal.length >= 1){
            startSearch(searchVal);
            e.target.name.value = '';
        } else{
            setRequired(true)
        }
    };
    

    const Done = ({name, id}) =>{
        console.log(id)
        if (name) {
        return (
            <div className="char__search-result-done">
                "There is! Visit "{name}" page?"
                <Link to={`/${type}/${id}`} onClick={()=>{selectForCommonPage(id)}} className="button button__secondary">
                    <div className="inner">To page</div>
                </Link>
            </div>
        )
    } else {
        return (
            <div className='char__search-result-bad'>
                The character was not found. Check the name and try again<br/>
            </div> 
        )
    }
    }   

    const Empty = () =>{
        return (
        <div className='char__search-result-bad'>
            This field is required
        </div> 
        )
    }

    const content = !loading && char ? <Done name={char.name} id={char.id} /> : required ? <Empty /> : null;

    return (
        <div className="char__search">
            <form action="" className="char__search-form" onSubmit={e=>onSubmitName(e)}>
                <label htmlFor="char__name-input" className="char__name-label">
                    Or find a character by name:
                </label>
                <div>
                    <input 
                        type="text" 
                        id="char__name-input" 
                        name="name" 
                        className="char__name-input" 
                        placeholder="Enter name" 
                    />
                    <button type="submit" className="button button__main">
                        <div className="inner">Find</div>
                    </button>
                </div>
            </form>
            {content}
            {loading?<Spinner/>:null}
            {error?<Done/>:null}

            </div>
    );
}

export default Search;
