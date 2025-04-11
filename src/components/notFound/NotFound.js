import './notFound.scss';
import { Link } from 'react-router-dom';
import ErrorMessage from '../errorMessage/ErrorMessage';

const NotFound = () => {
    return (
        <div className="not-found-page">
            <div className="not-found-page__title">
                404 — Page Not Found
            </div>
            <ErrorMessage />
            <Link to="/marvel_app" className="not-found-page__back-button">
                Back to Site
            </Link>
        </div>
    );
}

export default NotFound;
