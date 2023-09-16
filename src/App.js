import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Login from "./components/user/Login";
import SearchTickets from "./components/transaction/SearchTickets";
import React from "react";
import SellingTickets from "./components/transaction/SellingTickets";
import PurchaseTickets from "./components/transaction/PurchaseTickets";

function App() {
    return (
        <div className="App">
            <><Header/></>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/tickets/search" element={<SearchTickets/>}/>
                <Route path="/tickets/selling" element={<SellingTickets/>}/>
                <Route path="/tickets/purchase" element={<PurchaseTickets/>}/>
            </Routes>

            <><Footer/></>
        </div>
    );
}

export default App;
