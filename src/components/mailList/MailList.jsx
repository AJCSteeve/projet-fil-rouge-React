import React from 'react';
import "./mailList.css"
const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">Economise ton temps et ton argent !</h1>
            <span className="mailDescr">Abonne-toi, nous t'informerons des meilleurs offres</span>
            <div className="mailInputContainer">
                <input type={"text"} placeholder={"Ton adresse email"} />
                <button>Je m'abonne</button>
            </div>
        </div>
    );
};

export default MailList;