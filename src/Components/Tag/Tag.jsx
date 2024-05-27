import React from 'react';
import PropTypes from 'prop-types';
import './Tag.scss';

const Tag = ({tags}) => {
    if (!tags) {
        return null;
    }

    return (
        <div className='div_tags-container'>
            {tags.map((tag, index) => (
                <span key={index} className='tag-button'>{tag}</span>
            ))}
        </div>
    );
};

Tag.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tag; 