import React from 'react';
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import HeaderStore from "../../components/header/HeaderStore";
import PurchaseCart from "./PurchaseCart";

const PurchasePage = () => {
    return (
        <div>
            <HeaderStore />
            <div className="home-container">
                <PurchaseCart />
                {/*<MailList />
                <Footer/>*/}
            </div>
        </div>
    );
};

export default PurchasePage;