import React, { useEffect, useState } from 'react';
import ShowTickets from './ShowTickets';
import './show-tickets.css';
import HeaderStore from '../../components/header/HeaderStore';
import {concertEvents } from '../../assets/eventsData';

const FetchTicketsConcert = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(concertEvents);
    }, []);

    return (
        <>
            <div>
                <HeaderStore/>
            </div>
            <section className={"card-row"}>
                {items.map((item) =>
                    <ShowTickets
                        key={item.id}
                        imgSrc={item.imgUrl}
                        type={item.eventType}
                        descr={item.eventName}
                        city={item.eventCity}
                        date={item.date}
                        person={item.person}
                        price={(item.price)}
                    />
                )}
            </section>
        </>
    );
};

export default FetchTicketsConcert;
