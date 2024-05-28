import React from 'react';
import Proptypes from 'prop-types';
import starEmpty from '../../Assets/star-empty.png';
import starFull from '../../Assets/star-full.png';
import './Rating.scss';

const Rating = ({rating}) => {
    const maxRating = 5;
    const fullStars = Math.floor(rating);
    const emptyStars = maxRating - fullStars;
    return (
        <div className='div_rate-container'>
            {Array.from({length: fullStars}).map((_, index) => (
                <img key={index} src={starFull} alt="Full star" className='star'/>
            ))}
            {Array.from({length: emptyStars}).map((_, index) => (
                <img key={index} src={starEmpty} alt="Empty star" className='star'/>
            ))}
        </div>
    );
};

Rating.propTypes = {
    rating: Proptypes.number.isRequired
};

export default Rating; 