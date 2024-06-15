import React, { useEffect, useState } from 'react';
import BannerAbout from '../../Components/BannerAbout/BannerAbout';
import Collapse from '../../Components/Collapse/Collapse';

const AboutPage = () => {
    const [collapses, setCollapses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/collapse.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCollapses(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching collapses:', error);
                setError(error);
                setLoading(false);
            })
    }, [])

    return (
        <>
            <BannerAbout />
            <div className='div_collapse-container'>
                {collapses.map((collapseItem, index) => (
                    <Collapse 
                    key={index}
                    title={collapseItem.collapseTitle}
                    content={collapseItem.collapseDescription}
                    />
                ))}
            </div>
        </>
    );
};

export default AboutPage;
