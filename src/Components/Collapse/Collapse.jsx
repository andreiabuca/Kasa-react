import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Collapse.scss';
import vectorUp from '../../Assets/Vector-up.png';

const Collapse = ({ title, content, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${isOpen ? 'open' : 'closed'} ${className}`}>
            <div className='div_collapse-header' onClick={toggleCollapse}>
                <h2>{title}</h2>
                <img src={vectorUp} alt="Arrow" className={`collapse_arrow-ways ${isOpen ? 'rotate' : ''}`} />
            </div>
            <div className={`div_collapse-content ${isOpen ? 'open' : ''}`}>
                <div className={`collapse-inner-content ${isOpen ? 'visible' : 'hidden'}`}>
                    {Array.isArray(content) ? (
                        <ul className='ul_collapse-container'>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    className: PropTypes.string,
};

export default Collapse;