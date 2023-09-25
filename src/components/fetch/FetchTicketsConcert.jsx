import React, { useEffect, useState } from 'react';
import DetailTickets from './DetailTickets';
import './fetch-tickets.css';
import HeaderStore from '../header/HeaderStore';
import {concertEvents } from '../../assets/eventsData';
import {formatCurrency} from "../../utilities/formatCurrency";

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
                    <DetailTickets
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
