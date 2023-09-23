import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export default function UpdateProfile() {

    let navigate=useNavigate()
    const {id}=useParams()

    const [user,setUser]= useState({
        username:"",
        password:"",
        phoneNumber:"",
        photoUrl:"",
        email:""
    });

    const{username, password,phoneNumber,photoUrl,email}=user;

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
        navigate("/");
    };

    const loadUser = async ()=>{
        const result=await axios.get(`http://localhost:8080/api/users/${id}`)
        setUser(result.data)
    };
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow-lg">
                    <h2 className="text-center m-4">Modifier un utilisateur</h2>

                    <form onSubmit={(ev) => onSubmit(ev)}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                            <input type={"text"}
                                   className="form-control"
                                   placeholder="Veuillez entrer un nom d'utilisateur svp"
                                   name="username"
                                   value={username}
                                   onChange={(event)=>onInputChange(event)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Mot de passe
                            </label>
                            <input type={"text"}
                                   className="form-control"
                                   placeholder="Veuillez entrer un mot de passe svp"
                                   name="password"
                                   value={password}
                                   onChange={(event)=>onInputChange(event)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">
                                Phone number
                            </label>
                            <input type={"text"}
                                   className="form-control"
                                   placeholder="Veuillez entrer un numéro de téléphone svp"
                                   name="phoneNumber"
                                   value={phoneNumber}
                                   onChange={(event)=>onInputChange(event)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="photoUrl" className="form-label">
                                Phone number
                            </label>
                            <input type={"text"}
                                   className="form-control"
                                   placeholder="Veuillez entrer l'URL de votre photo"
                                   name="photoUrl"
                                   value={photoUrl}
                                   onChange={(event)=>onInputChange(event)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                E-mail
                            </label>
                            <input type={"text"}
                                   className="form-control"
                                   placeholder="Veuillez entrer une adresse email svp"
                                   name="email"
                                   value={email}
                                   onChange={(event)=>onInputChange(event)}/>
                        </div>
                        <button type="submit" className="btn btn-outline-success">Modifier</button>
                        <button className="btn btn-outline-danger mx-2" onClick={() => navigate("/")}>Annuler</button>
                    </form>
                </div>
            </div>
        </div>
    );
}