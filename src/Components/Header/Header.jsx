import React from 'react';
import {Link} from 'react-router-dom';
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
                    <Link to="/"><li className='link_accueil'>Accueil</li></Link>
                    <Link to="/apropos"><li className='link_apropos'>A Propos</li></Link>
                </ul>
            </nav>
            
            
        </header>
    )
}

export default Header;