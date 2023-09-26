import React from 'react';
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import PaymentPage from "../../components/payment/PaymentPage";

const Payment = () => {
    return (
        <div>
            <div className="home-container">
                <PaymentPage />
                <MailList />
                <Footer/>
            </div>
        </div>
    );
};

export default Payment;