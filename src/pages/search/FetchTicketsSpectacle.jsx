import React, { useEffect, useState } from 'react';
import ShowTickets from './ShowTickets';
import './show-tickets.css';
import HeaderStore from '../../components/header/HeaderStore';
import { spectacleEvents } from '../../assets/eventsData';

const FetchTicketsSpectacle = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(spectacleEvents);
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

export default FetchTicketsSpectacle;
