import React from 'react';
import PropTypes from 'prop-types';
import './Cards.scss';


const Cards = ({title, cover, description}) => {
    return (
        <div className='div_card-logement'>
            <img src={cover} alt={title} />
            {/* <div className='div_card-wrapper'> */}
            <h2 className='div_card-title div_card-shadow'>{title}</h2>
            {/* </div> */}
        </div>
    )
}

Cards.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Cards;
