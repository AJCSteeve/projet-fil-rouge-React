import React from 'react';
import "./show-tickets.css"

const ShowTickets = ({
                         imgSrc,
                         title,
                         descr,
                     }) => {
    return (
        <div className="card-container">
            <div className="card-custom">
                {imgSrc && (<img src={imgSrc} alt="photo" className="card-img"/>
                )}
                {title && <h3 className="card-title">{title}</h3>}
                {descr && <p className="card-descr">{descr}</p>}
                <a href="/panier" className="card-btn">Acheter</a>
            </div>
        </div>
    );
};

export default ShowTickets;