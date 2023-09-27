import React from 'react';
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import PaymentPage from "../payment/PaymentPage";

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