import React from 'react';
import "./home.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/Header";
import Events from "../../components/events/Events";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="homeContainer">
                <Events />
                <MailList />
            </div>
        </div>
    );
};

export default Home;