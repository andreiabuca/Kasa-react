import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import Card from '../../Components/Card/Card';
import './HomePage.scss';

const HomePage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/logements.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data loaded:', data);
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error)
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <>
        <Banner/>
        <div className='div_card-container'>
        {data.map(logement => (
            
            <Card
                key={logement.id}
                title={logement.title}
                cover={logement.cover}
                description={logement.description}
                link={`/apartmentpage/${logement.id}`}
            />
            
        ))}
        </div>
        </>
    );
};

export default HomePage;