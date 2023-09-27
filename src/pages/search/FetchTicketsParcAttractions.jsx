import { useEffect, useState } from 'react';
import React from 'react';
import ShowTickets from './ShowTickets';
import './show-tickets.css';
import HeaderStore from '../../components/header/HeaderStore';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {Button, Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFutbolBall,
    faGuitar,
    faIceCream,
    faMicrophone,
    faTents,
    faTheaterMasks
} from "@fortawesome/free-solid-svg-icons"; // Import useLocation

const FetchTicketsParcAttractions = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation(); // Use useLocation to access query parameters

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);

        // Get query parameters for event name and event city
        const eventName = queryParams.get('eventName');
        const eventCity = queryParams.get('eventCity');
        const eventType =  "Parc_attractions";

        // Create the API URL with optional query parameters
        const apiUrl = 'http://localhost:8080/api/tickets/search';
        const queryParamsString = new URLSearchParams({
            eventName: eventName || '',
            eventCity: eventCity || '',
            eventType: eventType || '',
        }).toString();
        const fullApiUrl = `${apiUrl}?${queryParamsString}`;

        axios
            .get(fullApiUrl)
            .then((response) => {
                setItems(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            });
    }, [location.search]);

    // Render loading state
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    // Affichage 3 items par ligne
    const chunkedItems = [];

    for (let i = 0; i < items.length; i += 3) {
        chunkedItems.push(items.slice(i, i + 3));
    }

    return (
        <>
            <Container className="store-container d-flex justify-content-around">
                <div className="headerList">
                    <Button className="item-btn headerListItem" href="/theatre">
                        <FontAwesomeIcon icon={faTheaterMasks} />
                        <span>Théâtre</span>
                    </Button>
                    <Button className="item-btn headerListItem" href="/concert">
                        <FontAwesomeIcon icon={faGuitar} />
                        <span>Concert</span>
                    </Button>
                    <Button className="item-btn headerListItem" href="/spectacle">
                        <FontAwesomeIcon icon={faMicrophone} />
                        <span>Spectacle</span>
                    </Button>
                    <Button className="item-btn headerListItem" href="/festival">
                        <FontAwesomeIcon icon={faTents} />
                        <span>Festival</span>
                    </Button>
                    <Button className="item-btn headerListItem" href="/match">
                        <FontAwesomeIcon icon={faFutbolBall} />
                        <span>Match</span>
                    </Button>
                    <Button className="item-btn headerListItem" href="/parc">
                        <FontAwesomeIcon icon={faIceCream} />
                        <span>Parc d'attractions</span>
                    </Button>

                </div>
            </Container>
            <div>
                <HeaderStore/>
            </div>

            <div>
                {chunkedItems.map((row, rowIndex) => (
                    <div className="card-row" key={rowIndex}>
                        {row.map((item) => (
                            <ShowTickets
                                key={item.id}
                                // imgSrc={item.imgUrl}
                                type={item.eventType}
                                descr={item.eventName}
                                city={item.eventCity}
                                date={item.date}
                                price={(item.price)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default FetchTicketsParcAttractions;