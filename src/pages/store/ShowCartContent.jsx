import React from 'react';
import "../../App.css"
import "../home/home.css"
import PurchaseCart from "../tickets/PurchaseCart";


const ShowCartContent = () => {
    return (
            <div>
                <PurchaseCart />
                {/*<Container className="home-container">
                    <MailList />
                    <Footer />
                </Container>*/}
            </div>
    );
};

export default ShowCartContent;