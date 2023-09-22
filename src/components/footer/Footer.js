import React from 'react';
import "./footer.css"
import {faFlag, faIceCream} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";
import payimg from '../../assets/pay.jpeg';

const Footer = () => {
    return (
        <div className={"footer"}>
            <div className="footerin1">
                <div className="footerLists">
                    <u className={"footerList"}>
                        <li className={"footerListItem"}><h3>A propos</h3></li>
                        <li className={"footerListItem"}>Conditions générales d'utilisation</li>
                        <li className={"footerListItem"}>Mentions légales</li>
                    </u>
                    <u className={"footerList"}>
                        <li className={"footerListItem"}><h3>Informations</h3></li>
                        <li className={"footerListItem"}>Contact</li>
                        <li className={"footerListItem"}>Aide</li>
                    </u>
                    <u className={"footerList"}>
                        <li className={"footerListItem"}><h3>Suivez-nous</h3></li>
                        <li className={"socialImg"}><FontAwesomeIcon icon={faFacebook} size="2x" color={"blue"}/></li>
                        <li className={"socialImg"}><FontAwesomeIcon icon={faTwitter} size="2x" color={"blue"} /></li>
                    </u>
                    <u className={"footerList"}>
                        <li className={"footerListItem"}><h3>Versions du site</h3></li>
                        <li className={"footerListItem"}><FontAwesomeIcon icon={faFlag} className={"england-flag"} /><span> English</span></li>
                        <li className={"footerListItem"}><FontAwesomeIcon icon={faFlag} className={"spain-flag"} /><span> Espagnol</span></li>
                        <li className={"footerListItem"}><FontAwesomeIcon icon={faFlag} className={"germany-flag"} /><span> Deutsch</span></li>
                    </u>
                </div>
            </div>
            <div className="footerin2">
                <div className="paymentImg">
                    <img src={payimg} alt="payment" />
                </div>
                <div className="footerText">
                    <h3>Tous droits réservés - My Ticket - 2023</h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;