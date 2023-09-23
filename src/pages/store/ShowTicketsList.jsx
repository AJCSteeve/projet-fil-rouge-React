import React, {useEffect, useState} from 'react';
import ShowTickets from './ShowTickets'; // Assurez-vous d'importer le composant ShowTickets
import './show-tickets.css';
import itemsData from '../../assets/items';

const ShowTicketsList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(itemsData);
    }, []);

    // Divisez le tableau en sous-tableaux de trois éléments chacun
    const chunkedItems = [];

    for (let i = 0; i < items.length; i += 3) {
        chunkedItems.push(items.slice(i, i + 3));
    }

    return (
        <div>
            {chunkedItems.map((row, rowIndex) => (
                <div className="card-row" key={rowIndex}>
                    {row.map((item) => (
                        <ShowTickets
                            key={item.id}
                            imgSrc={item.imgUrl}
                            title={item.eventName}
                            descr={item.price}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ShowTicketsList;
