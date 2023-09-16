import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import SearchTickets from "./components/SearchTickets";
import React from "react";
import SellingTickets from "./components/SellingTickets";
import PurchaseTickets from "./components/PurchaseTickets";

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
