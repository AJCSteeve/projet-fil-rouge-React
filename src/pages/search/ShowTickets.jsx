import React from 'react';
import "./show-tickets.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faLocationPin, faMoneyBills} from "@fortawesome/free-solid-svg-icons";

// // VERSION LINKED TO DATABASE
const ShowTickets = ({
                         type, descr,
                         city, date, price,
                     }) => {

    return (
        <div className="card-container">
            <div className="card-custom">
                {type && <h3 className="card-title">{type}</h3>}
                {descr && <p className="card-descr"> {descr}</p>}
                {price && city && <p className="card-details"> <FontAwesomeIcon icon={faMoneyBills} /> {price}€ <FontAwesomeIcon icon={faLocationPin} /> {city}</p>}
                {date && <p className="card-details"> <FontAwesomeIcon icon={faCalendar} /> {date}</p>}
                <a href="#" className="card-btn">Acheter</a>
            </div>
        </div>
    );
};

// // VERSION TEST DATA
// const ShowTickets = ({
//                           imgSrc,
//                           type, descr,
//                           city, date, price,
//                       }) => {
//     return (
//         <div className="card-container">
//             <div className="card-custom">
//                 {imgSrc && (<img src={imgSrc} alt="photo" className="card-img"/>
//                 )}
//                 {type && <h3 className="card-title">{type}</h3>}
//                 {descr && <p className="card-descr"> {descr}</p>}
//                 {price && city && <p className="card-details"> <FontAwesomeIcon icon={faMoneyBills} /> {price} <FontAwesomeIcon icon={faLocationPin} /> {city}</p>}
//                 {date && <p className="card-details"> <FontAwesomeIcon icon={faCalendar} /> {date}</p>}
//                 <a href="/panier" className="card-btn">Acheter</a>
//             </div>
//         </div>
//     );
// };

export default ShowTickets;