// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faCalendar, faLocationPin, faMoneyBills} from "@fortawesome/free-solid-svg-icons";
// import PaymentButton from "../../components/payment/PaymentButton";
//
//
// const eventTypeImages = {
//     Theatre: 'https://media.istockphoto.com/id/1295114854/fr/photo/fauteuils-rouges-vides-dun-th%C3%A9%C3%A2tre-pr%C3%AAt-pour-un-spectacle.webp?b=1&s=612x612&w=0&k=20&c=hk45uQ_ZKNJ8xbD4bt-eJ52IoQAurlvkfMBNCQNxi-g=',
//     Concert: 'https://media.istockphoto.com/id/1305198154/fr/photo/concert-de-roche-foule-encourageante-devant-des-lumi%C3%A8res-color%C3%A9es-lumineuses-de-sc%C3%A8ne.webp?b=1&s=612x612&w=0&k=20&c=K_MBJTpI5kTdnuArZ7GN4edU1QceEFkgpUaUCmMma8A',
//     Spectacle: 'https://media.istockphoto.com/id/72983254/fr/photo/femme-de-sentir-un-bouquet-de-roses-sur-la-sc%C3%A8ne-de-th%C3%A9%C3%A2tre.jpg?s=612x612&w=0&k=20&c=xvM_iTkIpLuuCAiXn4-7skMjM2Ho-9sms6_RUHT5XyM=',
//     Festival: 'https://media.istockphoto.com/id/1457408719/fr/photo/photo-de-groupe-du-festival-avec-des-amis.webp?b=1&s=612x612&w=0&k=20&c=0eEoUpZbbhqZ2RU-6VpfOOwWfJmOACTgVsuuptV-v3A=',
//     Match: 'https://media.istockphoto.com/id/1432118426/fr/photo/encourager-l%C3%A9quipe-de-rugby-pr%C3%A9f%C3%A9r%C3%A9e-%C3%A0-la-t%C3%A9l%C3%A9vision-dans-un-bar.webp?b=1&s=612x612&w=0&k=20&c=CIxJNXkzRSD9eeAJu3oOusJWm80Z3IaWFswZQ7pq7dg=',
//     'Parc d\'attractions': 'https://media.istockphoto.com/id/1051006012/fr/photo/h%C3%A9h%C3%A9-samuser-dans-un-parc-dattractions.jpg?s=612x612&w=0&k=20&c=2R2sOlVLuDyxVGxYKDtkJkKrqaw7ibARlwRSCKiJqC4=',
//     // Ajoutez d'autres valeurs et URL d'images au besoin
// };
// const Purchase = () => {
//
//     const [ticket, setTicket] = useState([]);
//
//
//     const axiosInstance = axios.create({
//         baseURL: "http://localhost:8080/api",
//         headers:
//             {
//                 Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, // Récupère le token JWT du stockage local
//                 "Content-Type": "application/json",
//             },
//     });
//
//     const idAsString = localStorage.getItem('userId'); // Récupère l'userId du stockage local et converti en entier
//     const idAsNumber = parseInt(idAsString, 10);
//
//     // Vérifier si la conversion a réussi (n'est pas NaN) et que l'ID est valide
//     if (isNaN(idAsNumber) || idAsNumber <= 0) {
//         console.error("L'ID n'est pas un nombre valide ou est manquant.");
//         return null;
//     }
//
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useEffect(() => {
//         // Récupérer les données depuis l'API
//         axiosInstance.get('/tickets/search')
//             .then((response) => {
//                 setTicket(response.data);
//             })
//             .catch((error) => {
//                 console.error('Erreur lors de la récupération des tickets :', error);
//             });
//     }, []);
//
//     return (
//
//         <div className="event-list">
//             <h2>Tickets disponible</h2>
//             <div className="event-cards">
//                 {ticket.map((event, index) => (
//                     <div className="event-card" key={index}>
//                         <img src={eventTypeImages[event.eventType]} alt={event.eventName} />
//                         <h3>{event.eventName}</h3>
//                         <p>Date: {event.date}</p>
//                         <p>Type: {event.eventType}</p>
//                         <p>Ville: {event.eventCity}</p>
//                         <p>Prix: {event.price}€</p>
//                         <button className={"card-btn"} onClick={() => addToCart(ticket)}>
//                             Acheter
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default Purchase;
