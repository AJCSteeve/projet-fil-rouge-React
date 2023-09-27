import "./edit-user.css"
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";


export default function EditUser(){

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080/api',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`, // Récupère le token JWT du stockage local
            'Content-Type': 'application/json'
        },
    });

    let navigate=useNavigate()

    const idAsString = localStorage.getItem('userId'); // Récupère l'userId du stockage local et converti en entier
    const idAsNumber = parseInt(idAsString, 10);

    // Vérifier si la conversion a réussi (n'est pas NaN) et que l'ID est valide
    if (isNaN(idAsNumber) || idAsNumber <= 0) {
        console.error("L'ID n'est pas un nombre valide ou est manquant.");
        return null;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user,setUser]= useState({
        username:"",
        phoneNumber:"",
        photoUrl:"",
        email:""
    });

    const{username, phoneNumber,photoUrl, email}=user;

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        loadUser();
    },[]);

    const onSubmit=async (ev)=>{
        ev.preventDefault();
        console.log("Formulaire soumis");
        await axiosInstance.put(`/users/${idAsNumber}`,user);
        navigate("/user:activepage");
    };

    const loadUser = async ()=>{
        const result=await axiosInstance.get(`/users/${idAsNumber}`);
        setUser(result.data)
    };

    return(
        <div className="edit-user">
            <h1 className="edit-user-title">Informations utilisateur</h1>
            <form onSubmit={(ev) => onSubmit(ev)}>
                <div className="edit-user-form-group">
                    <label htmlFor="username" className="edit-user-form-label">Identifiant <span>*</span></label>
                    <p>{username}</p>
                </div>
                <div className="edit-user-form-group">
                    <label htmlFor="phoneNumber" className="edit-user-form-label">Téléphone <span>*</span></label>
                    <input type='text'
                           id="phoneNumber"
                           className="edit-user-form-control"
                           placeholder="Veuillez entrer votre numéro de téléphone svp"
                           name="phoneNumber"
                           value={phoneNumber || ""}
                           onChange={(event)=>onInputChange(event)}/>
                </div>
                <div className="edit-user-form-group">
                    <label htmlFor="photoUrl" className="edit-user-form-label">Photo <span>*</span></label>
                    <input type='text'
                           id="photoUrl"
                           className="edit-user-form-control"
                           placeholder="Veuillez entrer un Url photo svp"
                           name="photoUrl"
                           value={photoUrl || ""}
                           onChange={(event)=>onInputChange(event)}/>
                </div>
                <div className="edit-user-form-group">
                    <label htmlFor="email" className="edit-user-form-label">Email <span>*</span></label>
                    <input type='text'
                           id="email"
                           className="edit-user-form-control"
                           placeholder="Veuillez entrer votre email svp"
                           name="email"
                           value={email || ""}
                           onChange={(event)=>onInputChange(event)}/>
                </div>
            <button type="submit" className="edit-user-btn-envoyer">Envoyer</button>
            <button className="edit-user-btn-annuler" onClick={() => navigate("/user/:activepage")}>Annuler</button>
        </form>
        </div>
    );
}