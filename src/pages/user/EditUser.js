import "./AccountSettings.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


export default function EditUser(){

    let navigate=useNavigate()
    const {id}=useParams()

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

    useEffect(()=>{
        loadUser();
    },[]);

    const onSubmit=async (ev)=>{
        ev.preventDefault();
        await axios.put(`http://localhost:8080/api/users/${id}`,user);
        navigate("/user/:activepage");
    };

    const loadUser = async ()=>{
        const result=await axios.get(`http://localhost:8080/api/users/id/${id}`)
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