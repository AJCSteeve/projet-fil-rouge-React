import React, {useEffect, useState} from "react";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faLocationPin, faMoneyBills, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import PaymentButton from "../../components/payment/PaymentButton";
export default function PurchaseCart() {


    const [cart, setCart] = useState([]);

    const [ticket, setTicket] = useState([]);

    const eventTypeImages = {
        Theatre: 'https://media.istockphoto.com/id/1295114854/fr/photo/fauteuils-rouges-vides-dun-th%C3%A9%C3%A2tre-pr%C3%AAt-pour-un-spectacle.webp?b=1&s=612x612&w=0&k=20&c=hk45uQ_ZKNJ8xbD4bt-eJ52IoQAurlvkfMBNCQNxi-g=',
        Concert: 'https://media.istockphoto.com/id/1305198154/fr/photo/concert-de-roche-foule-encourageante-devant-des-lumi%C3%A8res-color%C3%A9es-lumineuses-de-sc%C3%A8ne.webp?b=1&s=612x612&w=0&k=20&c=K_MBJTpI5kTdnuArZ7GN4edU1QceEFkgpUaUCmMma8A',
        Spectacle: 'https://media.istockphoto.com/id/72983254/fr/photo/femme-de-sentir-un-bouquet-de-roses-sur-la-sc%C3%A8ne-de-th%C3%A9%C3%A2tre.jpg?s=612x612&w=0&k=20&c=xvM_iTkIpLuuCAiXn4-7skMjM2Ho-9sms6_RUHT5XyM=',
        Festival: 'https://media.istockphoto.com/id/1457408719/fr/photo/photo-de-groupe-du-festival-avec-des-amis.webp?b=1&s=612x612&w=0&k=20&c=0eEoUpZbbhqZ2RU-6VpfOOwWfJmOACTgVsuuptV-v3A=',
        Match: 'https://media.istockphoto.com/id/1432118426/fr/photo/encourager-l%C3%A9quipe-de-rugby-pr%C3%A9f%C3%A9r%C3%A9e-%C3%A0-la-t%C3%A9l%C3%A9vision-dans-un-bar.webp?b=1&s=612x612&w=0&k=20&c=CIxJNXkzRSD9eeAJu3oOusJWm80Z3IaWFswZQ7pq7dg=',
        'Parc d\'attractions': 'https://media.istockphoto.com/id/1051006012/fr/photo/h%C3%A9h%C3%A9-samuser-dans-un-parc-dattractions.jpg?s=612x612&w=0&k=20&c=2R2sOlVLuDyxVGxYKDtkJkKrqaw7ibARlwRSCKiJqC4=',
        // Ajoutez d'autres valeurs et URL d'images au besoin
    };


    const getCartTotal = () => {
        return cart.reduce((sum, { quantity }) => sum + quantity, 0);};

    const getTotalSum = () => {
        const total = cart.reduce(
            (sum, { price, quantity }) => sum + price * quantity,
            0
        );

        // Arrondir le total à 2 décimales après la virgule
        return total.toFixed(2);
    };

    const clearCart = () => {
        setCart([]);
    };

    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product) => product !== productToRemove)
        );
    };

    const addToCart = (product) => {
        let newCart = [...cart];
        let itemInCart = newCart.find(
            (item) => product.eventName === item.name
        );
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...product,
                quantity: 1,
            };
            newCart.push(itemInCart);
        }
        setCart(newCart);
    };

    const axiosInstance = axios.create({
        baseURL: "http://localhost:8080/api",
        headers:
            {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, // Récupère le token JWT du stockage local
                "Content-Type": "application/json",
            },
    });

    const idAsString = localStorage.getItem('userId'); // Récupère l'userId du stockage local et converti en entier
    const idAsNumber = parseInt(idAsString, 10);

    // Vérifier si la conversion a réussi (n'est pas NaN) et que l'ID est valide
    if (isNaN(idAsNumber) || idAsNumber <= 0) {
        console.error("L'ID n'est pas un nombre valide ou est manquant.");
        return null;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        // Récupérer les données depuis l'API
        axiosInstance.get('/tickets/search')
            .then((response) => {
                setTicket(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des tickets :', error);
            });
    }, []);

    const renderTickets = () => (
        <div className="card-container">
            <>
                <section className={"card-row"}>
                    {ticket.map((product, idx) =>
                    <div className="card-custom" key={idx}>
                        <img src={eventTypeImages[ticket.eventType]} alt={ticket.eventName} />
                        <h3 className="card-title">{ticket.eventType}</h3>
                        <p className="card-descr">{ticket.eventName}</p>
                            <p className="card-details"> <FontAwesomeIcon icon={faMoneyBills} /> {ticket.price}€ <FontAwesomeIcon icon={faLocationPin} /> {ticket.eventCity}</p>
                            <p className="card-details"> <FontAwesomeIcon icon={faCalendar} /> {ticket.date}</p>
                            <button className={"card-btn"} onClick={() => addToCart(ticket)}>
                                Acheter
                            </button>
                        </div>
                    )}
                </section>
            </>
        </div>
    )

    const renderCart = () => (
        <div className="card-container">
            <>
                <section className={"card-row"}>
                    {cart.map((product, idx) =>
                        <div className="card-custom" key={idx}>
                            <img src={eventTypeImages[ticket.eventType]} alt={ticket.eventName} />
                            <h3 className="card-title">{ticket.eventType}</h3>
                            <p className="card-descr"> {ticket.eventName}</p>
                            <p className="card-details"> <FontAwesomeIcon icon={faMoneyBills} /> {ticket.price}€ <FontAwesomeIcon icon={faLocationPin} /> {ticket.eventCity}</p>
                            <p className="card-details"> <FontAwesomeIcon icon={faCalendar} /> {ticket.date}</p>
                            <button className={"card-btn"} onClick={() => removeFromCart(product)}>
                                Remove
                            </button>
                        </div>
                    )}
                </section>
                <div className={"total-amount"}>Montant total : €{getTotalSum()}</div>
                <div className={"payment-btn"}>
                    <PaymentButton />
                </div>
            </>
        </div>
    )


    return (

        <nav className="store-container">
            <div className="store-box">
                <input type="text" className="search-input" placeholder="Recherchez un ticket" />
                <div>
                    {cart.length > 0 && (
                        <button className="clear-btn" onClick={clearCart}>Vider le panier</button>
                    )}
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </span>
                    <span>{getCartTotal()}</span>
                </div>
            </div>

        </nav>
    );
};
