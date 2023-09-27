import React from 'react';
import "../../App.css"
import "../home/home.css"
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import AddRemoveCart from "../../components/cart/AddRemoveCart";


const ShowCartContent = () => {
    return (
            <div>
                <AddRemoveCart />
                {/* <div className="home-container">
                    <MailList />
                    <Footer />
                </div>*/}
            </div>
    );
};

export default ShowCartContent;