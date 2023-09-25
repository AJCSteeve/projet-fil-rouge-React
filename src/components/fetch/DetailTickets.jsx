import React from 'react';
import "./fetch-tickets.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faLocationPin, faMoneyBills} from "@fortawesome/free-solid-svg-icons";


const DetailTickets = ({ imgSrc, type, descr, city, date, price }) => {
    return (
        <div className="card-container">
            <div className="card-custom">
                {imgSrc && (<img src={imgSrc} alt="photo" className="card-img"/>
                )}
                {type && <h3 className="card-title">{type}</h3>}
                {descr && <p className="card-descr"> {descr}</p>}
                {price && city && <p className="card-details"> <FontAwesomeIcon icon={faMoneyBills} /> {price}€ <FontAwesomeIcon icon={faLocationPin} /> {city}</p>}
                {date && <p className="card-details"> <FontAwesomeIcon icon={faCalendar} /> {date}</p>}
                <button className="card-btn">Acheter</button>
            </div>
        </div>
    );
};

export default DetailTickets;