import React from 'react';
import logo from '../../Assets/LOGO.png';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className='div_logo'>
            <img src={logo} alt="Logo"/>
            </div>
            <nav className='nav'>
                <ul>
                    <li className='link_accueil'>Accueil</li>
                    <li className='link_apropos'>A Propos</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;