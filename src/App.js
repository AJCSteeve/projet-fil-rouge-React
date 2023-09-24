import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import {Container, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap-grid.min.css"
import Home from "./pages/home/Home";
import Register from "./pages/crud/Register";
import Login from "./pages/crud/Login";
import UserProfile from "./pages/user/UserProfile";
import VerifyProfile from "./pages/crud/VerifyProfile";
import FetchTicketsAll from "./pages/store/FetchTicketsAll";
import SellingTickets from "./components/transaction/SellingTickets";
import FetchTicketsConcert from "./pages/store/FetchTicketsConcert";
import FetchTicketsSpectacle from "./pages/store/FetchTicketsSpectacle";
import TicketDetails from "./pages/store/TicketDetails";
import PurchaseTickets from "./components/transaction/PurchaseTickets";
import TransactionRating from "./components/transaction/TransactionRating";
import CheckSellingHistory from "./components/transaction/CheckSellingHistory";
import CheckPurchaseHistory from "./components/transaction/CheckPurchaseHistory";


function App() {
    return (
        <Container className="App mb-1">
            <div>
                <>
                    <Navbar/>
                <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>

                    <Route path="/user/:activepage" element={<UserProfile/>}/>
                    <Route path="/profile/verify" element={<VerifyProfile/>}/>

                    <Route path="/store" element={<FetchTicketsAll/>}/>
                    <Route path="/concerts" element={<FetchTicketsConcert/>}/>
                    <Route path="/spectacles" element={<FetchTicketsSpectacle/>}/>
                    <Route path='/product/:id' element={<TicketDetails />} />

                    {/* Routes about transactions :
                - search, selling, purchase of tickets,
                - rating of a transaction,
                - consulting transaction history (sellings & purchases)
                */}

                    <Route path="/tickets/selling" element={<SellingTickets/>}/>
                    <Route path="/tickets/purchase" element={<PurchaseTickets/>}/>
                    <Route path="/transaction/rating" element={<TransactionRating/>}/>
                    <Route path="/transaction/history/selling" element={<CheckSellingHistory/>}/>
                    <Route path="/transaction/history/purchase" element={<CheckPurchaseHistory/>}/>
                </Routes>
                {/*fixme the background image isn't displayed, while the picture URL is right.*/}
                <div className='bg-image p-5 text-center shadow-1-strong rounded mb-5 text-light'></div>
                </>
            </div>
        </Container>
    );
}

export default App;
