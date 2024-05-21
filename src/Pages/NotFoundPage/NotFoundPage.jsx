import React from 'react';
import {Link} from 'react-router-dom';
import './NotFoundPage.scss';

const NotFoundPage = () => {
    return (
        <div className='div_error-container'>
            <p className='p_error-number'>404</p>
            <p className='p_error-text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='link-error'>Retourner sur la page d’accueil</Link>
        </div>
    );
};

export default NotFoundPage;
