import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowLeft from '../../Assets/Vector-left.png';
import ArrowRight from '../../Assets/Vector-right.png';
import './Carrousel.scss';

const Carrousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <section className='sec_carrousel-container'>
            {pictures.length > 1 && (
                <>
                    <img src={ArrowLeft} alt="Left arrow" className='arrow-left' onClick={prevSlide} />
                    <img src={ArrowRight} alt="Right arrow" className='arrow-right' onClick={nextSlide} />

                    <div className='div_slide-count'>
                        {currentIndex + 1} / {pictures.length}
                    </div>
                </>
            )}
            <div className='slides'>
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
        </section>
    );
};

Carrousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string),
};

export default Carrousel;

