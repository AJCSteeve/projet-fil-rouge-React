import React, {useState} from 'react';
import itemsData from "../../assets/items";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faLocationPin, faMoneyBills, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import "./add-remove-cart.css"
import "../header/header-store.css"
import PaymentButton from "../payment/PaymentButton";

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

const AddRemoveCart = () => {
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const getCartTotal = () => {
        return cart.reduce(
            (sum, { quantity }) => sum + quantity,
            0
        );
    };

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

    const setQuantity = (product, amount) => {
        const newCart = [...cart];
        newCart.find(
            (item) => item.name === product.name
        ).quantity = amount;
        setCart(newCart);
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

    const renderProducts = () => (
        <div className="card-container">
            <>
                <section className={"card-row"}>
                    {itemsData.map((product, idx) =>
                        <div className="card-custom" key={idx}>
                            <img src={product.imgUrl} alt="event" className="card-img"/>
                            <h3 className="card-title">{product.eventType}</h3>
                            <p className="card-descr"> {product.eventName}</p>
                            <p className="card-details"> <FontAwesomeIcon icon={faMoneyBills} /> {product.price}€ <FontAwesomeIcon icon={faLocationPin} /> {product.eventCity}</p>
                            <p className="card-details"> <FontAwesomeIcon icon={faCalendar} /> {product.date}</p>
                            <button className={"card-btn"} onClick={() => addToCart(product)}>
                                Add to Cart
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
                            <img src={product.imgUrl} alt="event" className="card-img"/>
                            <h3 className="card-title">{product.eventType}</h3>
                            <p className="card-descr"> {product.eventName}</p>
                            <p className="card-details"> <FontAwesomeIcon icon={faMoneyBills} /> {product.price}€ <FontAwesomeIcon icon={faLocationPin} /> {product.eventCity}</p>
                            <p className="card-details"> <FontAwesomeIcon icon={faCalendar} /> {product.date}</p>
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
                <button className="store-btn"  onClick={() => navigateTo(PAGE_PRODUCTS)}>
                    Consultez nos produits en vente
                </button>
                <div>
                    {cart.length > 0 && (
                        <button className="clear-btn" onClick={clearCart}>Vider le panier</button>
                    )}
                </div>
                <div className="cart-icon" onClick={() => navigateTo(PAGE_CART)}>
                    <span>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </span>
                    <span>{getCartTotal()}</span>
                </div>
            </div>

            {page === PAGE_PRODUCTS && renderProducts()}
            {page === PAGE_CART && renderCart()}

        </nav>
    );
};

export default AddRemoveCart;