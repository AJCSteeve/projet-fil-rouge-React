import React, {useState} from 'react';
import "./login.css"
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {
    let navigate = useNavigate()

    const [login,setLogin]= useState({
        username:"",
        password:""
    });

    const{username, password}=login;

    const [errorMessage, setErrorMessage] = useState('');

    const handleUsernameChange = (e) => {
        setLogin({ ...login, username: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setLogin({ ...login, password: e.target.value });
    };

    const handleLogin = async (ev) => {
        ev.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", login);
            if (response.status === 200) {
                const { token } = response.data;
                localStorage.setItem('jwtToken', token);
                navigate("/");
            } else {
                throw new Error('Authentication failed');
            }
        } catch (error) {
            console.error('Error:', error.message);
            // Affichez un message d'erreur à l'utilisateur
            setErrorMessage("Mot de passe ou nom d'utilisateur incorrect");
        }
    };

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
                    <h1>Connexion</h1>
                    <form className="login-form">
                        <input type="username"
                               id="username"
                               value={username}
                               onChange={handleUsernameChange}
                               placeholder="Identifiant" />
                        <input type="password"
                               id="password"
                               value={password}
                               onChange={handlePasswordChange}
                               placeholder="Mot de passe" />
                        <Link to="/">
                            <button className="login-btn" onClick={handleLogin}>Se connecter</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;