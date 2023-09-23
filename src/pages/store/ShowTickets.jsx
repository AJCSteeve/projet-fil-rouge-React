import React from 'react';
import "./show-tickets.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoneyBill, faMoneyBills, faPerson} from "@fortawesome/free-solid-svg-icons";


const ShowTickets = ({
                         imgSrc,
                         title, date, person,
                         descr,
                     }) => {
    return (
        <div className="card-container">
            <div className="card-custom">
                {imgSrc && (<img src={imgSrc} alt="photo" className="card-img"/>
                )}
                {title && <h3 className="card-title">{title}</h3>}
                {descr && <p className="card-descr"> <FontAwesomeIcon icon={faMoneyBills} /> {descr} - {date}</p>}
                {descr && <p className="card-person"> <FontAwesomeIcon icon={faPerson} /> {person}</p>}
                <a href="/panier" className="card-btn">Acheter</a>
            </div>
        </div>
    );
};

export default ShowTickets;