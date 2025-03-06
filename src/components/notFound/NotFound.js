import './notFound.scss';
import { Link } from 'react-router-dom';  // Исправленный импорт
import ErrorMessage from '../errorMessage/ErrorMessage';

const NotFound = () => {
    return (
        <div className="not-found-page">
            <div className="not-found-page__title">
                404 — Link is not found
            </div>
            <ErrorMessage />
            <Link to="/marvel_app" className="not-found-page__back-button">
                Back to all
            </Link>
        </div>
    );
}

export default NotFound;
