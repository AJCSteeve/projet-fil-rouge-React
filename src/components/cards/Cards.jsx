import React from 'react';
import "./cards.css"
import * as events from "events";

const Cards = () => {
    return (
        <div className="events">
            <div className={"top-section"}>
                <div className="eventItem">
                    <img src="https://media.istockphoto.com/id/1295114854/fr/photo/fauteuils-rouges-vides-dun-th%C3%A9%C3%A2tre-pr%C3%AAt-pour-un-spectacle.webp?b=1&s=612x612&w=0&k=20&c=hk45uQ_ZKNJ8xbD4bt-eJ52IoQAurlvkfMBNCQNxi-g="
                         alt={"theatre"}
                         className={"eventImg"}></img>
                    <div className="eventTitle">
                        <h1>Théâtre</h1>
                    </div>
                </div>
                <div className="eventItem">
                    <img src="https://media.istockphoto.com/id/1305198154/fr/photo/concert-de-roche-foule-encourageante-devant-des-lumi%C3%A8res-color%C3%A9es-lumineuses-de-sc%C3%A8ne.webp?b=1&s=612x612&w=0&k=20&c=K_MBJTpI5kTdnuArZ7GN4edU1QceEFkgpUaUCmMma8A="
                         alt={"concert"}
                         className={"eventImg"}></img>
                    <div className="eventTitle">
                        <h1>Concert</h1>
                    </div>
                </div>
                <div className="eventItem">
                    <img src="https://media.istockphoto.com/id/72983254/fr/photo/femme-de-sentir-un-bouquet-de-roses-sur-la-sc%C3%A8ne-de-th%C3%A9%C3%A2tre.jpg?s=612x612&w=0&k=20&c=xvM_iTkIpLuuCAiXn4-7skMjM2Ho-9sms6_RUHT5XyM="
                         alt={"spectacle"}
                         className={"eventImg"}></img>
                    <div className="eventTitle">
                        <h1>Spectacle</h1>
                    </div>
                </div>
            </div>
            <div className="bottom-section">
                <div className="eventItem">
                    <img src="https://media.istockphoto.com/id/1457408719/fr/photo/photo-de-groupe-du-festival-avec-des-amis.webp?b=1&s=612x612&w=0&k=20&c=0eEoUpZbbhqZ2RU-6VpfOOwWfJmOACTgVsuuptV-v3A="
                         alt={"festival"}
                         className={"eventImg"}></img>
                    <div className="eventTitle">
                        <h1>Festival</h1>
                    </div>
                </div>
                <div className="eventItem">
                    <img src="https://media.istockphoto.com/id/1432118426/fr/photo/encourager-l%C3%A9quipe-de-rugby-pr%C3%A9f%C3%A9r%C3%A9e-%C3%A0-la-t%C3%A9l%C3%A9vision-dans-un-bar.webp?b=1&s=612x612&w=0&k=20&c=CIxJNXkzRSD9eeAJu3oOusJWm80Z3IaWFswZQ7pq7dg="
                         alt={"match"}
                         className={"eventImg"}></img>
                    <div className="eventTitle">
                        <h1>Match</h1>
                    </div>
                </div>
                <div className="eventItem">
                    <img src="https://media.istockphoto.com/id/1051006012/fr/photo/h%C3%A9h%C3%A9-samuser-dans-un-parc-dattractions.jpg?s=612x612&w=0&k=20&c=2R2sOlVLuDyxVGxYKDtkJkKrqaw7ibARlwRSCKiJqC4="
                         alt={"parc d'attractions"}
                         className={"eventImg"}></img>
                    <div className="eventTitle">
                        <h1>Parc d'attractions</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;