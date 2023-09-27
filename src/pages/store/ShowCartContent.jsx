import React from 'react';
import "../../App.css"
import "../home/home.css"
import PurchaseCart from "../tickets/PurchaseCart";
import MailList from "../../components/mailList/MailList";
import {Container} from "react-bootstrap";
import Footer from "../../components/footer/Footer";


const ShowCartContent = () => {
    return (
            <div>
                <PurchaseCart />
                <Container className="home-container">
                    <MailList />
                    <Footer />
                </Container>
            </div>
    );
};

export default ShowCartContent;