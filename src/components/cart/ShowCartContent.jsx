import React from 'react';
import "../../App.css"
import "../../pages/home/home.css"
import MailList from "../mailList/MailList";
import Footer from "../footer/Footer";
import AddRemoveCart from "./AddRemoveCart";


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