import {useParams} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import UserSideBar from "../../components/userProfile/UserSideBar";
import AccountSettings from "../../components/userProfile/AccountSettings";
import "./UserProfile.css";
import ChangePassword from "../../components/userProfile/ChangePassword";
import Orders from "../../components/userProfile/Orders";
import {useEffect, useState} from "react";
import axios from "axios";


export default function UserProfile() {

    const{activepage} = useParams()


    // alert(activepage)
    return(
        <div className="userprofile">
            <Navbar/>
            <div className="userprofilein">
                <div className="left"><UserSideBar activepage={activepage}/></div>
                <div className="right">
                    {activepage === 'accountsettings' && <AccountSettings/>}
                    {activepage === 'changepassword' && <ChangePassword/>}
                    {activepage === 'orders' && <Orders/>}
                </div>
            </div>
            <Footer/>
        </div>
    );

}