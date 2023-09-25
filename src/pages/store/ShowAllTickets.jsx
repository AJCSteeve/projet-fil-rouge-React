import React, {useState} from 'react';
import Cart from "../../components/cart/Cart";
import HeaderStore from "../../components/header/HeaderStore";
import FetchTicketsAll from "../../components/fetch/FetchTicketsAll";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";


const ShowAllTickets = () => {
    const [showCart, setShowCart] = useState(true);
    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        if (cart.indexOf(item) !== -1) return;
        setCart([...cart, item]);
    };

    const handleChange = (item, d) => {
        const updatedCart = [...cart]; // Créez une copie du tableau cart pour éviter la modification directe de l'état
        const ind = updatedCart.indexOf(item);

        if (ind !== -1) {
            updatedCart[ind] = { ...item, amount: Math.max(1, item.amount + d) }; // Mettez à jour la quantité de l'article
            setCart(updatedCart); // Mettez à jour le panier avec la nouvelle copie mise à jour
        }
    };

    return (
        <React.Fragment>
            <div>
                <HeaderStore setShowCart={setShowCart} size={cart.length} />
            </div>
            <div className="home-container">
                {showCart ? (
                    <FetchTicketsAll handleClick={handleClick} />
                ) : (
                    <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
                )}
                <MailList />
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default ShowAllTickets;