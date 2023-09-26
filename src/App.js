import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap-grid.min.css"
import Home from "./pages/home/Home";
import UserProfile from "./pages/user/UserProfile";
import VerifyProfile from "./pages/crud/VerifyProfile";
import FetchTicketsAll from "./pages/store/FetchTicketsAll";
import FetchTicketsConcert from "./pages/store/FetchTicketsConcert";
import FetchTicketsSpectacle from "./pages/store/FetchTicketsSpectacle";
import FetchTicketsTheatre from "./pages/store/FetchTicketsTheatre";
import FetchTicketsFestival from "./pages/store/FetchTicketsFestival";
import FetchTicketsMatch from "./pages/store/FetchTicketsMatch";
import FetchTicketsParcAttractions from "./pages/store/FetchTicketsParcAttractions";
import TicketDetails from "./pages/store/TicketDetails";
import PurchaseTickets from "./components/transaction/PurchaseTickets";
import TransactionRating from "./components/transaction/TransactionRating";
import CheckSellingHistory from "./components/transaction/CheckSellingHistory";
import CheckPurchaseHistory from "./components/transaction/CheckPurchaseHistory";
import Navbar from "./components/navbar/Navbar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Selling from "./pages/tickets/Selling";

import FetchTicketsAll from "./components/fetch/FetchTicketsAll";
import FetchTicketsSpectacle from "./components/fetch/FetchTicketsSpectacle";
import FetchTicketsConcert from "./components/fetch/FetchTicketsConcert";
import ShowCartContent from "./pages/store/ShowCartContent";
import Payment from "./pages/store/Payment";

function App() {
    return (
        <div className="App mb-1">
            <div>
                <>
                    <Navbar/>
                <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>

                    <Route path="/user/:activepage" element={<UserProfile/>}/>
                    <Route path="/profile/verify" element={<VerifyProfile/>}/>

                    <Route path="/search" element={<FetchTicketsAll/>}/>
                    <Route path="/store" element={<ShowCartContent/>}/>
                    <Route path="/concert" element={<FetchTicketsConcert/>}/>
                    <Route path="/spectacle" element={<FetchTicketsSpectacle/>}/>
                    <Route path="/festival" element={<FetchTicketsFestival/>}/>
                    <Route path="/match" element={<FetchTicketsMatch/>}/>
                    <Route path="/parc" element={<FetchTicketsParcAttractions/>}/>
                    <Route path='/product/:id' element={<TicketDetails />} />

                    <Route path="/paiement" element={<Payment/>}/>

                    <Route path="/tickets/selling" element={<Selling/>}/>
                    <Route path="/tickets/purchase" element={<PurchaseTickets/>}/>
                    <Route path="/transaction/rating" element={<TransactionRating/>}/>
                    <Route path="/transaction/history/selling" element={<CheckSellingHistory/>}/>
                    <Route path="/transaction/history/purchase" element={<CheckPurchaseHistory/>}/>
                </Routes>
                {/*fixme the background image isn't displayed, while the picture URL is right.*/}
                <div className='bg-image p-5 text-center shadow-1-strong rounded mb-5 text-light'></div>
                </>
            </div>
        </div>
    );
}

export default App;
