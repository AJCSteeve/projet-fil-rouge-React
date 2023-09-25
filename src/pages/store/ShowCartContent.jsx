import React from 'react';
import "../../App.css"
import "../home/home.css"
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import AddRemoveCart from "../../components/cart/AddRemoveCart";


const ShowCartContent = () => {
    return (
            <React.Fragment>
                <AddRemoveCart />
                {/*<div className="home-container">
                    <MailList />
                    <Footer />
                </div>*/}
            </React.Fragment>
    );
};

export default ShowCartContent;