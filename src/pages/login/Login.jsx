import React from 'react';
import "./login.css"
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="login">
            <div className="login-card">
                <div className="login-left">
                    <h1>MyTicket</h1>
                    <p>1ère communauté sur la revente de billets.</p>
                    <p>Si vous avez des billets que vous ne pouvez pas utiliser,
                        notre plateforme vous permet de les vendre en un clin d'œil.
                        Partagez l'expérience avec d'autres amateurs passionnés.
                    </p>
                    <span>Tu n'as pas encore de compte ?</span>
                    <Link to="/register">
                        <button className="login-left-btn">Créer un compte</button>
                    </Link>
                </div>
                <div className="login-right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <Link to="/">
                            <button className="login-btn">Login</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;