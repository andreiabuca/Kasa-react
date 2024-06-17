import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowLeft from '../../Assets/Vector-left.png';
import ArrowRight from '../../Assets/Vector-right.png';
import './Carousel.scss';

const Carousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex === pictures.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length - 1);
        } else {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
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

Carousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string),
};

export default Carousel;