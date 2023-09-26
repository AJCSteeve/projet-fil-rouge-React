import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Selling.css";

export default function Selling() {
    const axiosInstance = axios.create({
        baseURL: "http://localhost:8080/api",
        headers:
            {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, // Récupère le token JWT du stockage local
                "Content-Type": "application/json",
            },
    });

    const idAsString = localStorage.getItem('userId'); // Récupère l'userId du stockage local et converti en entier
    const idAsNumber = parseInt(idAsString, 10);

    // Vérifier si la conversion a réussi (n'est pas NaN) et que l'ID est valide
    if (isNaN(idAsNumber) || idAsNumber <= 0) {
        console.error("L'ID n'est pas un nombre valide ou est manquant.");
        return null;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userData, setUserData] = useState({
        username: ""
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate = useNavigate();

    // store form content into a state :
    // 1) initialize ticket object
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ticket, setTicket] = useState({
        date: "",
        eventName: "",
        eventType: "",
        eventCity: "",
        price: ""
    });

    // 2) deconstruction
    const { date, eventName, eventType, eventCity, price } = ticket;

    // set all the user attributes to the values entered in the form
    const onInputChange = (e) => {
        if (e.target.name === 'eventType') {
            setTicket({ ...ticket, eventType: e.target.value });
        } else {
            setTicket({ ...ticket, [e.target.name]: e.target.value });
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("/tickets", ticket);
            console.log(response);
            console.log(localStorage.getItem("jwtToken"))
            navigate("/");
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const loadUser = async () => {
            try {
                const response = await axiosInstance.get(`/users/${idAsNumber}`);
                setUserData(response.data);
            } catch (error) {
                console.error("Erreur", error.message);
            }
        };

        loadUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idAsNumber]);

    return (
        <div className="selling">
            <div className="selling-card">
                <div className="selling-left">
                    <h1>MyTicket</h1>
                    <p>1ère communauté sur la revente de billets.</p>
                    <p>Merci d'avoir choisi notre plateforme,
                        celle-ci vous permet de vendre vos tickets en un clin d'œil.
                        Partagez l'expérience avec d'autres amateurs passionnés.
                    </p>
                </div>
                <div className="selling-right">
                    <h1>Créer un ticket</h1>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <input
                            type="date"
                            name="date"
                            value={date}
                            placeholder="Date de l'événement"
                            required
                            onChange={(e) => onInputChange(e)}
                        />
                        <input
                            type="text"
                            name="eventName"
                            value={eventName}
                            placeholder="Nom de l'événement"
                            required
                            onChange={(e) => onInputChange(e)}
                        />
                        <select
                            name="eventType"
                            value={eventType}
                            placeholder="Type d'événement"
                            onChange={(e) => onInputChange(e)}
                            required
                        >
                            <option value="">Sélectionnez le type d'événement</option>
                            <option value="Théâtre">Théâtre</option>
                            <option value="Concert">Concert</option>
                            <option value="Spectacle">Spectacle</option>
                            <option value="Festival">Festival</option>
                            <option value="Match">Match</option>
                            <option value="Parc d'attractions">Parc d'attractions</option>

                            {/* Ajoutez d'autres options au besoin */}
                        </select>
                        <input
                            type="text"
                            name="eventCity"
                            value={eventCity}
                            placeholder="Lieu de l'événement"
                            required
                            onChange={(e) => onInputChange(e)}
                        />
                        <input
                            type="number"
                            name="price"
                            value={price}
                            placeholder="Prix"
                            required
                            onChange={(e) => onInputChange(e)}
                        />
                        <input
                            type="text"
                            name="username"
                            value={userData.username} readOnly
                            required
                        />
                        <div>
                            <button type="submit" className="selling-btn">Soumettre</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};