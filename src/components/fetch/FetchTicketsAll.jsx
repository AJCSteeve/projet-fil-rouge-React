import React, {useEffect, useState} from 'react';
import DetailTickets from './DetailTickets';
import './fetch-tickets.css';
import itemsData from "../../assets/items";
import {formatCurrency} from "../../utilities/formatCurrency";


const FetchTicketsAll = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(itemsData);
    }, []);

    return (
        <>
            <section className={"card-row"}>
                {items.map((item) =>
                    <DetailTickets
                        key={item.id}
                        imgSrc={item.imgUrl}
                        type={item.eventType}
                        descr={item.eventName}
                        city={item.eventCity}
                        date={item.date}
                        price={item.price}
                    />
                )}
            </section>
        </>
    );
};

export default FetchTicketsAll;
