import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SearchTickets from "./components/transaction/SearchTickets";
import SellingTickets from "./components/transaction/SellingTickets";
import PurchaseTickets from "./components/transaction/PurchaseTickets";
import VerifyProfile from "./pages/crud/VerifyProfile";
import TransactionRating from "./components/transaction/TransactionRating";
import CheckSellingHistory from "./components/transaction/CheckSellingHistory";
import CheckPurchaseHistory from "./components/transaction/CheckPurchaseHistory";
import Navbar from "./components/navbar/Navbar";
import HomeTheatre from "./pages/home/HomeTheatre";
import TicketDetails from "./pages/details/TicketDetails";
import UserProfile from "./pages/user/UserProfile";


function App() {
    return (
        <div className="App">
            <div>
                <><Navbar/></>
                <Routes>
                    {/* Routes about user account :
                - register
                - login
                - update user profile
                - verify user profile //TODO DEFINIR VERIFICATION DU PROFIL
                */}
                    <Route path="/" element={<Home/>}/>
                    <Route path='/theatre' element={<HomeTheatre />} />
                    <Route path='/product/:id' element={<TicketDetails />} />

                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/user/:activepage" element={<UserProfile/>}/>
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
                {/*fixme the background image isn't displayed, while the picture URL is right.*/}
                <div className='bg-image p-5 text-center shadow-1-strong rounded mb-5 text-light'></div>
            </div>
        </div>
    );
}

export default App;
