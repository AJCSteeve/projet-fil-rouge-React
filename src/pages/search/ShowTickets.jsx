import React, {useState} from 'react';
import "./show-tickets.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationPin, faMoneyBills } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'; // Import Axios

const ShowTickets = ({
                         idTicket, // Add id prop
                         type,
                         descr,
                         city,
                         date,
                         price,
                     }) => {

    // Formalize into object (even mono-attribute)
    const [idPurchasedTicket, setIdTicket] = useState({
        id: { idTicket }
    });
    // Deconstruct :
    const { id } = idPurchasedTicket;


    const handlePurchase = () => {
        // PUT request to purchase the ticket
        axios.put(`http://localhost:8080/api/tickets/purchase`, { idPurchasedTicket })
            .then((response) => {
                // Handle the response (e.g., show a success message)
                console.log('Ticket purchased:', response.data);
            })
            .catch((error) => {
                // Handle errors (e.g., show an error message)
                console.error('Error purchasing ticket:', error);
            });
    };

    return (
        <div className="card-container">
            <div className="card-custom">
                {type && <h3 className="card-title">{type}</h3>}
                {descr && <p className="card-descr"> {descr}</p>}
                {price && city && (
                    <p className="card-details">
                        <FontAwesomeIcon icon={faMoneyBills} /> {price}€ <FontAwesomeIcon icon={faLocationPin} /> {city}
                    </p>
                )}
                {date && <p className="card-details"> <FontAwesomeIcon icon={faCalendar} /> {date}</p>}
                <button className="card-btn" onClick={handlePurchase}>Acheter</button>
            </div>
        </div>
    );
};

export default ShowTickets;


// import React from 'react';
// import "./show-tickets.css"
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faCalendar, faLocationPin, faMoneyBills} from "@fortawesome/free-solid-svg-icons";
//
// // // VERSION LINKED TO DATABASE
// const ShowTickets = ({
//                          type, descr,
//                          city, date, price,
//                      }) => {
//
//     return (
//         <div className="card-container">
//             <div className="card-custom">
//                 {type && <h3 className="card-title">{type}</h3>}
//                 {descr && <p className="card-descr"> {descr}</p>}
//                 {price && city && <p className="card-details"> <FontAwesomeIcon icon={faMoneyBills} /> {price}€ <FontAwesomeIcon icon={faLocationPin} /> {city}</p>}
//                 {date && <p className="card-details"> <FontAwesomeIcon icon={faCalendar} /> {date}</p>}
//                 <a href="/panier" className="card-btn">Acheter</a>
//             </div>
//         </div>
//     );
// };
//
//
// export default ShowTickets;