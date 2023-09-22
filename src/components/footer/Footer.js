import React from 'react';
import "./footer.css"
import {faFlag, faIceCream} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";
import payimg from '../../assets/pay.jpeg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-in-1">
                <div className="footer-lists">
                    <ul className="footer-list">
                        <li className="footerListItem"><h3>A propos</h3></li>
                        <li className="footerListItem">Conditions générales d'utilisation</li>
                        <li className="footerListItem">Mentions légales</li>
                    </ul>
                    <ul className="footer-list">
                        <li className="footerListItem"><h3>Informations</h3></li>
                        <li className="footerListItem">Contact</li>
                        <li className="footerListItem">Aide</li>
                    </ul>
                    <ul className="footer-list">
                        <li className="footerListItem"><h3>Suivez-nous</h3></li>
                        <li className="social-img"><FontAwesomeIcon icon={faFacebook} size="2x" color={"blue"}/></li>
                        <li className="social-img"><FontAwesomeIcon icon={faTwitter} size="2x" color={"blue"} /></li>
                    </ul>
                    <ul className="footer-list">
                        <li className="footerListItem"><h3>Versions du site</h3></li>
                        <li className="footerListItem"><FontAwesomeIcon icon={faFlag} className="england-flag" /><span> English</span></li>
                        <li className="footerListItem"><FontAwesomeIcon icon={faFlag} className="spain-flag" /><span> Espagnol</span></li>
                        <li className="footerListItem"><FontAwesomeIcon icon={faFlag} className="germany-flag" /><span> Deutsch</span></li>
                    </ul>
                </div>
            </div>
            <div className="footer-in-2">
                <div className="payment-img">
                    <img src={payimg} alt="payment" />
                </div>
                <div className="footer-text">
                    <h3>Tous droits réservés - My Ticket - 2023</h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;