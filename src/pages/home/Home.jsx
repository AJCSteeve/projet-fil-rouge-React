import React from 'react';
import "./home.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/Header";
import Cards from "../../components/cards/Cards";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="homeContainer">
                <Cards />
                <MailList />
            </div>
        </div>
    );
};

export default Home;