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
        try {
            const response = await axios.post("http://localhost:8080/api/users/register", user);
            console.log(response);
            navigate("/");
        } catch (error) {
            console.error('Error:', error);
        }
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
                    <form onSubmit={(e)=>onSubmit((e))}>
                        <input type="text"
                               name="username"
                               value={username}
                               placeholder="Identifiant"
                               required
                               onChange={(e)=>onInputChange(e)}
                        />


                        <input type="email"
                               name="email"
                               value={email}
                               placeholder="Email"
                               required
                               onChange={(e)=>onInputChange(e)}
                        />
                        <input type="password"
                               name="password"
                               value={password}
                               placeholder="Mot de passe"
                               required
                               onChange={(e)=>onInputChange(e)}
                        />
                        <div>
                            <button type="submit" className="register-btn">S'inscrire</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;