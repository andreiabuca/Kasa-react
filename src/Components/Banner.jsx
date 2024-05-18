import React from 'react';
import banner from '../Assets/banner_2.png';
import '../Components/Banner.scss';

const Banner = () => {
    return (
        <div className='div_banner'>
            <div className='div_banner-image'>
                {/* <img src={banner} alt="Image of a beach coast" /> */}
            </div>
            <div className='div_banner-text'>
                <p>Chez vous, partout et ailleurs</p>
            </div>
        </div>
    )
}

export default Banner;