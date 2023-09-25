import React, {useEffect, useState} from 'react';
import DetailTickets from './DetailTickets';
import './fetch-tickets.css';
import HeaderStore from "../header/HeaderStore";
import itemsData from "../../assets/items";
import {formatCurrency} from "../../utilities/formatCurrency";
import Cart from '../cart/Cart';


const FetchTicketsAll = ({handleClick}) => {
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
                        price={formatCurrency(item.price)}
                        handleClick={handleClick}
                    />
                )}
            </section>
        </>
    );
};

export default FetchTicketsAll;
