import {useEffect, useState} from 'react';
import React from 'react';
import ShowTickets from './ShowTickets';
import './show-tickets.css';
import HeaderStore from "../../components/header/HeaderStore";
import itemsData from '../../assets/items';
import {formatCurrency} from "../../utilities/formatCurrency";
import axios from 'axios';

const FetchTicketsAll = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // // TEST VERSION
    // useEffect(() => {
    //     setItems(itemsData);
    // }, []);


    useEffect(() => {
        axios.get('http://localhost:8080/api/tickets/search')
            .then((response) => {
                setItems(response.data);
                setLoading(false); // Set loading to false when data is fetched
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError(error); // Set error state when an error occurs
                setLoading(false); // Set loading to false even if there's an error
            });
    }, []);

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
                                // person={item.person}
                                price={formatCurrency(item.price)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default FetchTicketsAll;
