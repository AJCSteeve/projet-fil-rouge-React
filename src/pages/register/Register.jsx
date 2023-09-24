import React, {useState} from 'react';
import "./register.css";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () => {

    let navigate=useNavigate();

    // store form content into a state :
    // 1) initialize user object
    const [user, setUser]=useState({
        username:"",
        password:"",
        email:""
    });
    // 2) deconstruction of the object
    const {username,password, email}=user;


    //note : (e) = event
    // set all the user attributes to the values entered in the form
    const onInputChange=(e)=>{
        setUser({ ...user, [e.target.name]:e.target.value})
    };

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/api/users/register", user) // note : url pas nécessairement le même que url partie
        navigate("/"); //navigate to home after submitting form

    };

    return (
        <div className="register">
            <div className="register-card">
                <div className="register-left">
                    <h1>MyTicket</h1>
                    <p>1ère communauté sur la revente de billets.</p>
                    <p>Si vous avez des billets que vous ne pouvez pas utiliser,
                        notre plateforme vous permet de les vendre en un clin d'œil.
                        Partagez l'expérience avec d'autres amateurs passionnés.
                    </p>
                    <span>Tu as déjà un compte ?</span>
                    <Link to="/login">
                        <button className={"register-left-btn"}>Connexion</button>
                    </Link>
                </div>
                <div className="register-right">
                    <h1>Créer un compte</h1>
                    <form>
                        <input type="text" placeholder="Identifiant" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Mot de passe" />
                        <Link to="/">
                            <button className="register-btn">S'inscrire</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;