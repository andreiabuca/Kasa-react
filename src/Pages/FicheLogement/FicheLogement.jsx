import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Carrousel from '../../Components/Carrousel/Carrousel';
import Tag from '../../Components/Tag/Tag';
import Host from '../../Components/Host/Host';
import Rating from '../../Components/Rating/Rating';
import Collapse from '../../Components/Collapse/Collapse';
import './FicheLogement.scss';

const FicheLogement = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [sellectedAppart, setSellectedAppart] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/logements.json");
                const sellected = response.data.find(({ id }) => id === params.id);

                if (!sellected) {
                    navigate("*", { state: { message: "Can't get data" } });
                } else {
                    setSellectedAppart(sellected);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                navigate("*", { state: { message: "Error fetching data" } });
            }
        };

        fetchData()
    }, [params.id, navigate]);

    if (!sellectedAppart) {
        return;
    }

    const equipments = sellectedAppart.equipments;
    const description = sellectedAppart.description;
    const numericRating = Number(sellectedAppart.rating)

    return (
        <div className='sec_fiche-container'>
            <Carrousel pictures={sellectedAppart.pictures} />

            <div className='div_info-container'>
                <div className='div_left-container'>
                    <div className='div_location-container'>
                        <h1>{sellectedAppart.title}</h1>
                        <p>{sellectedAppart.location}</p>
                    </div>
                    <Tag tags={sellectedAppart.tags} />
                </div>

                <div className='div_right-container'>
                    <div className='div_host-container'>
                        <Host name={sellectedAppart.host.name} picture={sellectedAppart.host.picture} />
                    </div>
                    {/* <Rating rating={sellectedAppart.rating} /> */}
                    <Rating rating={numericRating} />
                </div>
            </div>

            <div className='div_collapse-fiche-container'>
                <Collapse title="Description" content={description} className="fiche-collapse"/>
                <Collapse title="Équipements" content={equipments} className="fiche-collapse"/>
            </div>
        </div>
    );
};

export default FicheLogement;
