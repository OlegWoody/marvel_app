import './commonPage.scss'
import xMen from '../../resources/img/x-men.png';

const CommonPage = () => {
    return (
        <div className="common-page">
            <img src={xMen} alt="x-men" className="common-page__img"/>
            <div className="common-page__info">
                <h2 className="common-page__name">X-Men: Days of Future Past</h2>
                <p className="common-page__descr">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
                <p className="common-page__descr">144 pages</p>
                <p className="common-page__descr">Language: en-us</p>
                <div className="common-page__price">9.99$</div>
            </div>
            <a href="#" className="common-page__back">Back to all</a>
        </div>
    )
}

export default CommonPage;