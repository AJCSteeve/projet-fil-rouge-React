import React, {useEffect, useState} from 'react';
import ShowTickets from './ShowTickets';
import './show-tickets.css';
import HeaderStore from "../../components/header/HeaderStore";
import itemsData from '../../assets/items';
import {formatCurrency} from "../../utilities/formatCurrency";

const FetchTicketsAll = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(itemsData);
    }, []);

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
                                imgSrc={item.imgUrl}
                                type={item.eventType}
                                descr={item.eventName}
                                city={item.eventCity}
                                date={item.date}
                                person={item.person}
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
