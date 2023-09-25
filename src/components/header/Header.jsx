import React from 'react';
import "./header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCameraRetro, faFutbolBall,
    faGuitar, faIceCream,
    faMicrophone,
    faTents,
    faTheaterMasks,
    faVideoCamera
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faTheaterMasks} />
                        <span>Théâtre</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faGuitar} />
                        <span>Concert</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faMicrophone} />
                        <span>Spectacle</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faTents} />
                        <span>Festival</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faFutbolBall} />
                        <span>Match</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faIceCream} />
                        <span>Parc d'attractions</span>
                    </div>
                </div>
                <h1 className="headerTitle">Vous ne pouvez pas vous présenter à un évènement ?</h1>
                <p className="headerDescr">Ne perdez pas votre argent, revendez vos tickets de théâtre, concerts, parcs d’attraction, spectacles...</p>
            </div>
        </div>
    );
};

export default Header;