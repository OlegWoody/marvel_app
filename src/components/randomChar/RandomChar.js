import "./randomChar.scss";
import { useState, useEffect, useCallback } from "react";
import MarvelService from "../../services/MarvelServices";
import Spinner from "../spinner/Spinner";
import ChooseBanner from "../chooseBanner/ChooseBanner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import StubAvatar from "../stubAvatar/StubAvatar";

const RandomChar = (props) => {
    const [state, setState] = useState(null);
    const { getCharactersById, loading, error } = MarvelService();

    // useEffect(() => {
    //     generatedId();
    // }, []);

    const onCharLoaded = (char) => {
        setState(char);
    };

    const updateChar = (id) => {
        getCharactersById(id)
            .then(onCharLoaded)
            .catch(() => {
                console.log('Error');
            });
    };

    const generatedId = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000 + 1) + 1011000);
        updateChar(id);
    };

    const altContent = !(state || loading || error) ? <AltView /> : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spin = loading && !error ? <Spinner /> : null;
    const content = !(loading || error) && state ? <View char={state} select={props} /> : null;

    return (
        <div className="randomchar">
            <h2 className="randomchar__title">Discover a Random Character!</h2>
            <p className="randomchar__subtitle">Click below to learn more about a randomly selected character</p>
            <div className="randomchar__block">
                {errorMessage}
                {altContent}
                {content}
                {spin}
                <div className="randomchar__block-logo">
                    <ChooseBanner />
                </div>
                <div className="randomchar__block-static">
                    <div className="randomchar__block-name">Want Another?</div>
                    <div className="randomchar__block-img-static">
                        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="80" r="30" fill="#222" stroke="#fff" strokeWidth="3" />
                            <path d="M60 160 Q100 85, 140 160" fill="#222" stroke="#fff" strokeWidth="5" />
                        </svg>
                    </div>
                    <div className="randomchar__block-static-descr">Click "Try it" to preview a random character</div>
                    <button onClick={generatedId} className="button button__main button__glow">
                        <div className="inner">Try it</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

const AltView = () => {
    return (
        <div className="randomchar__block-char">
            <div className="randomchar__block-name">Select a character</div>
            <div className="randomchar__block-img">
                <StubAvatar />
            </div>
            <div className="randomchar__block-descr">Character information will appear here</div>
        </div>
    );
};

const View = ({ char: { id, name, description, thumbnail, objStyle }, select: { selectForInfo } }) => {
    let borderRad = { borderRadius: "50%" };
    if (objStyle?.objectFit === 'fill') {
        borderRad = { borderRadius: 0 };
    }

    return (
        <div className="randomchar__block-char">
            <div className="randomchar__block-name">{name}</div>
            <div className="randomchar__block-img">
                <img 
                    className="randomchar__block-img"
                    style={{ ...borderRad, ...objStyle }}
                    src={thumbnail}
                    alt={name}
                />
            </div>
            <div className="randomchar__block-descr">{description}</div>
            <button onClick={() => selectForInfo(id)} className="button button__main">
                <div className="inner">Select</div>
            </button>
        </div>
    );
};

export default RandomChar;
