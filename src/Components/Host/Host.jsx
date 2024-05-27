import React from 'react'; 
import PropTypes from 'prop-types';
import './Host.scss';

const Host = ({name, picture}) => {
    return (
        <aside className='aside_host-container'>
            <div className='host-name'>{name}</div>
            <div className='host-picture'>
                <img src={picture} alt={name} />
            </div>
        </aside>
    )
}

Host.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string
};

export default Host; 