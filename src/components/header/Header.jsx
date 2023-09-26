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
import {Button} from "react-bootstrap";

const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <Button className="item-btn headerListItem" href="/theatre">
                        <FontAwesomeIcon icon={faTheaterMasks} />
                        <span>Théâtre</span>
                    </Button>
                    <Button className="item-btn headerListItem" href="/concert">
                        <FontAwesomeIcon icon={faGuitar} />
                        <span>Concert</span>
                    </Button>
                    <Button className="item-btn headerListItem" href="/spectacle">
                        <FontAwesomeIcon icon={faMicrophone} />
                        <span>Spectacle</span>
                    </Button>
                    <Button className="item-btn headerListItem" href="/festival">
                        <FontAwesomeIcon icon={faTents} />
                        <span>Festival</span>
                    </Button>
                    <Button className="item-btn headerListItem" href="/match">
                        <FontAwesomeIcon icon={faFutbolBall} />
                        <span>Match</span>
                    </Button>
                    <Button className="item-btn headerListItem" href="/parc">
                        <FontAwesomeIcon icon={faIceCream} />
                        <span>Parc d'attractions</span>
                    </Button>
                </div>
                <h1 className="headerTitle">Vous ne pouvez pas vous présenter à un évènement ?</h1>
                <p className="headerDescr">Ne perdez pas votre argent, revendez vos tickets de théâtre, concerts, parcs d’attraction, spectacles...</p>
            </div>
        </div>
    );
};

export default Header;