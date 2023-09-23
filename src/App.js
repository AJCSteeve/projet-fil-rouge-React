import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css"

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SellingTickets from "./components/transaction/SellingTickets";
import PurchaseTickets from "./components/transaction/PurchaseTickets";
import UpdateProfile from "./pages/crud/UpdateProfile";
import VerifyProfile from "./pages/crud/VerifyProfile";
import TransactionRating from "./components/transaction/TransactionRating";
import CheckSellingHistory from "./components/transaction/CheckSellingHistory";
import CheckPurchaseHistory from "./components/transaction/CheckPurchaseHistory";
import Navbar from "./components/navbar/Navbar";
import TicketDetails from "./pages/store/TicketDetails";
import ShowTickets from "./pages/store/ShowTickets";
import {Container} from "react-bootstrap";

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

                    <Route path="/profile/update" element={<UpdateProfile/>}/>
                    <Route path="/profile/verify" element={<VerifyProfile/>}/>

                    <Route path="/show" element={<ShowTickets/>}/>
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
