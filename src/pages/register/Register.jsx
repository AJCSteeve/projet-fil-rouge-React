import React from 'react';
import "./register.css";
import {Link} from "react-router-dom";

const Register = () => {
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