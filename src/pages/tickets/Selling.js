import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";


export default function Selling(){

    const axiosInstance = axios.create({
        baseURL: "http://localhost:8080/api",
        headers: {
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

    const loadUser = async () => {
        try {
            const response = await axiosInstance.get(`/users/${idAsNumber}`);
            setUserData(response.data);
        } catch (error) {
            console.error("Erreur", error.message);
        }
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userData, setUserData] = useState({
        username: ""
    });

    const {username}=username;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate=useNavigate();

    // store form content into a state :
    // 1) initialize ticket object
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ticket, setTicket]=useState({
        date:"",
        eventName:"",
        eventType:"",
        eventCity:"",
        price:""
    });

    // 2) deconstruction of the object
    const {date,eventName, eventType,eventCity,price}=ticket;
    //note : (e) = event
    // set all the user attributes to the values entered in the form
    const onInputChange=(e)=>{
        setTicket({ ...ticket, [e.target.name]:e.target.value})
    };

    const onSubmit=async (e)=>{
        e.preventDefault();
        try {
            const response = await axiosInstance.post("/tickets", ticket);
            console.log(response);
            navigate("/");
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return(

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
                    <form onSubmit={(e)=>onSubmit((e))}>
                        <input type="datetime-local"
                               name="date"
                               value={date}
                               placeholder="Date de l'événement"
                               required
                               onChange={(e)=>onInputChange(e)}
                        />
                        <input type="text"
                               name="eventName"
                               value={eventName}
                               placeholder="Nom de l'événement"
                               required
                               onChange={(e)=>onInputChange(e)}
                        />
                        <input type="text"
                               name="eventType"
                               value={eventType}
                               placeholder="Type d'événement"
                               required
                               onChange={(e)=>onInputChange(e)}
                        />
                        <input type="text"
                               name="eventCity"
                               value={eventCity}
                               placeholder="Lieu de l'événement"
                               required
                               onChange={(e)=>onInputChange(e)}
                        />
                        <input type="float"
                               name="price"
                               value={price}
                               placeholder="Prix"
                               required
                               onChange={(e)=>onInputChange(e)}
                        />
                        <input type="username"
                               name="price"
                               value={price}
                               placeholder="Prix"
                               required
                               onChange={(e)=>onInputChange(e)}
                        />
                        <input type="text"
                               name="username"
                               value={username} readOnly
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
