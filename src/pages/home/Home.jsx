import React from 'react';
import "./home.css"
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home-container">
                <Cards />
                <MailList />
                <Footer/>
            </div>
        </div>
    );
};

export default Home;