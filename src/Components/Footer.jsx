import React from 'react';
import footer from '../Assets/Footer-desktop.png'
import '../Components/Footer.scss'
const Footer = () => {
    return (
        <footer>
            <div className="div_footer">
                <img src={footer} alt="Footer"/>
            </div>
        </footer>
    )
}

export default Footer;