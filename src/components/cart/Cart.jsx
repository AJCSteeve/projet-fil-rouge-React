import React, { useState, useEffect } from "react";
import "./cart.css";
import {Container} from "react-bootstrap";

const Cart = ({ cart, setCart, handleChange }) => {
    {/*
    cart: Un tableau qui contient les éléments du panier.
    setCart: Une fonction pour mettre à jour le contenu du panier.
    handleChange: Une fonction qui gère les changements de quantité d'articles dans le panier.
    */}
    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };

    const handlePrice = () => {
        let total = 0;
        cart.map((item) => (total += item.amount * item.price));
        setPrice(total);
    };

    {/*pour appeler automatiquement la fonction handlePrice chaque fois que le composant est rendu ou que le contenu du panier change.*/}
    useEffect(() => {
        handlePrice();
    });

    return (
        <article>
            {cart.map((item) => (
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.imgSrc} alt="photo d'un evenement" />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={() => handleChange(item, 1)}>+</button>
                        <button>{item.amount}</button>
                        <button onClick={() => handleChange(item, -1)}>-</button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className="total">
                <span>Prix total :</span>
                <span>{price} €</span>
            </div>
        </article>
    );
};

export default Cart;