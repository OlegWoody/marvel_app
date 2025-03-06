import "./skeleton.scss";

const skeleton = () =>{
    return(
        <>
            <p className="char__select">Select any character to see the characteristics</p>
            <div className="skeleton">
                <div className="pulse skeleton__header">
                <div className="pulse skeleton__circle"></div>
                <div className="pulse skeleton__circle"></div>
                <div className="pulse skeleton__circle"></div>
                <div className="pulse skeleton__circle"></div>
                <div className="pulse skeleton__circle"></div>
                <div className="pulse skeleton__circle"></div>
                </div>
            </div>
        </>
    )
}

export default skeleton;