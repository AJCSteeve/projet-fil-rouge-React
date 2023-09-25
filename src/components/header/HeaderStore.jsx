import React from 'react';
import "./header-store.css"
import { Container, Navbar, FormControl, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const HeaderStore = ({ setShowCart, size }) => {
    return (
        <nav className="store-container">
            <div className="store-box">
                <button className="store-btn" onClick={() => setShowCart(true)}>
                    Consultez nos tickets en vente
                </button>
                <input type="text" className="search-input" placeholder="Recherchez un ticket" />
                <div className="cart-icon" onClick={() => setShowCart(false)}>
                    <span>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    );
};

export default HeaderStore;
