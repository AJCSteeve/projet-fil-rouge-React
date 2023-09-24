import "./AccountSettings.css"
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
        await axiosInstance.put(`/users/${idAsNumber}`,user);
        navigate("/user/:activepage");
    };

    const loadUser = async ()=>{
        const result=await axiosInstance.get(`/users/${idAsNumber}`);
        setUser(result.data)
    };

    return(
        <div className="edituser">
            <h1 className="mainhead1">Informations utilisateur</h1>
            <div className='form'onSubmit={(ev) => onSubmit(ev)}>
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Identifiant <span>*</span></label>
                    <input type={"text"}
                           className="form-control"
                           placeholder="Veuillez entrer votre identifinat svp"
                           name="username"
                           value={username}
                           onChange={(event)=>onInputChange(event)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber" className="form-label">Téléphone <span>*</span></label>
                    <input type='text'
                           className="form-control"
                           placeholder="Veuillez entrer votre numéro de téléphone svp"
                           name="phoneNumber"
                           value={phoneNumber}
                           onChange={(event)=>onInputChange(event)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="photoUrl" className="form-label">Photo <span>*</span></label>
                    <input type='text'
                           className="form-control"
                           placeholder="Veuillez entrer un Url photo svp"
                           name="photoUrl"
                           value={photoUrl}
                           onChange={(event)=>onInputChange(event)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email <span>*</span></label>
                    <input type='text'
                           className="form-control"
                           placeholder="Veuillez entrer votre email svp"
                           name="email"
                           value={email}
                           onChange={(event)=>onInputChange(event)}/>
                </div>
            </div>
            <button type="submit" className="mainbutton1">Envoyer</button>
            <button className="btn btn-outline-danger mx-2" onClick={() => navigate("/user/:activepage")}>Annuler</button>
        </div>
    )
}