import React from 'react';
import "./mailList.css"
const MailList = () => {
    return (
        <div className="mail-main">
            <h1 className="mail-title">Economise ton temps et ton argent !</h1>
            <span className="mail-descr">Abonne-toi, nous t'informerons des meilleures offres.</span>
            <div className="mail-input-container">
                <input type={"text"} placeholder={"Ton adresse email"} />
                <button>Je m'abonne</button>
            </div>
        </div>
    );
};

export default MailList;