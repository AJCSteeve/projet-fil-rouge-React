import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Login from "./components/user/Login";
import SearchTickets from "./components/transaction/SearchTickets";
import React from "react";
import SellingTickets from "./components/transaction/SellingTickets";
import PurchaseTickets from "./components/transaction/PurchaseTickets";
import Register from "./components/user/Register";
import UpdateProfile from "./components/user/UpdateProfile";
import VerifyProfile from "./components/user/VerifyProfile";
import TransactionRating from "./components/transaction/TransactionRating";
import CheckSellingHistory from "./components/transaction/CheckSellingHistory";
import CheckPurchaseHistory from "./components/transaction/CheckPurchaseHistory";

function App() {
    return (
        <div className="App">
            <><Header/></>
            <Routes>
                {/* Routes about user account :
                - register
                - login
                - update user profile
                - verify user profile //TODO DEFINIR VERIFICATION DU PROFIL
                */}
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile/update" element={<UpdateProfile/>}/>
                <Route path="/profile/verify" element={<VerifyProfile/>}/>
                {/* Routes about transactions :
                - search, selling, purchase of tickets,
                - rating of a transaction,
                - consulting transaction history (sellings & purchases)
                */}
                <Route path="/tickets/search" element={<SearchTickets/>}/>
                <Route path="/tickets/selling" element={<SellingTickets/>}/>
                <Route path="/tickets/purchase" element={<PurchaseTickets/>}/>
                <Route path="/transaction/rating" element={<TransactionRating/>}/>
                <Route path="/transaction/history/selling" element={<CheckSellingHistory/>}/>
                <Route path="/transaction/history/purchase" element={<CheckPurchaseHistory/>}/>

            </Routes>

            <><Footer/></>
        </div>
    );
}

export default App;
