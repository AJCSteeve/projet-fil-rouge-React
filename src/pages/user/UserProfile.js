import {useParams} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import UserSideBar from "./UserSideBar";
import AccountSettings from "./AccountSettings";
import "./user-profile.css";
import ChangePassword from "./ChangePassword";
import Orders from "./Orders";
import EditUser from "./EditUser";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import MailList from "../../components/mailList/MailList";
import React from "react";


export default function UserProfile() {

    const{activepage} = useParams()


    // alert(activepage)
    return(
        <div className="user-profile">
            <Navbar/>
            <div className="home-container">
                <div className="user-profile-in">
                    <div className="user-profile-left">
                        <UserSideBar activepage={activepage}/>
                    </div>
                    <div className="user-profile-right">
                        {activepage === 'compte' && <AccountSettings/>}
                        {activepage === 'modifier' && <EditUser/>}
                        {activepage === 'modifierMotDePasse' && <ChangePassword/>}
                        {activepage === 'transactions' && <Orders/>}
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    );

}