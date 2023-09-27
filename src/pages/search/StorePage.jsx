import React, { useState } from 'react';
import FetchTicketsAll from './FetchTicketsAll';
import AddRemoveCart from '../../components/cart/AddRemoveCart';
import HeaderSearch from "../../components/header/HeaderSearch";

function StorePage() {
    // State to manage cart items
    const [cartItems, setCartItems] = useState([]);

    // Function to add an item to the cart
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    // Function to remove an item from the cart
    const removeFromCart = (item) => {
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedCart);
    };

    return (
        <div>
            <HeaderSearch />
            <div>
                {/* Pass cartItems and addToCart as props to FetchTicketsAll */}
                <FetchTicketsAll cartItems={cartItems} addToCart={addToCart} />

                {/* Pass cartItems and removeFromCart as props to AddRemoveCart */}
                <AddRemoveCart cartItems={cartItems} removeFromCart={removeFromCart} />
            </div>
        </div>
    );
}

export default StorePage;