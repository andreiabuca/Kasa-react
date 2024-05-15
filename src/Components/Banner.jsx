import React from 'react';
import banner from '../Assets/banner_2.png';
import '../Components/Banner.scss';

const Banner = () => {
    return (
        <div className='div_banner'>
            <img src={banner} alt="Image of a beach coast" />
            <p className='p_banner-text'>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner;