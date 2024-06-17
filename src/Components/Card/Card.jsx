import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.scss';


const Cards = ({title, cover, link}) => {
    return (
        <Link to={link}>
        <div className='div_card-logement'>
            <img src={cover} alt={title} />
            <h2 className='div_card-title div_card-shadow'>{title}</h2>
        </div>
        </Link>
    )
}

Cards.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Cards;