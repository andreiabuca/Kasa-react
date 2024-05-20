import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Collapse.scss';
import vectorUp from '../../Assets/Vector-up.png';

const Collapse = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false); //--> le state du toggle et false par default 

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${isOpen ? 'open' : 'closed'}`}>
            <div className='div_collapse-header' onClick={toggleCollapse}>
                <h2>{title}</h2>
                <img src={vectorUp} alt="Arrow" className={`collapse_arrow-ways ${isOpen ? 'rotate':''}`} />
            </div>
            <div className={`div_collapse-content ${isOpen ? 'animated' : ''}`}>
                {isOpen && <p>{content}</p>}
            </div>
        </div>
    );
};

Collapse.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};

export default Collapse;