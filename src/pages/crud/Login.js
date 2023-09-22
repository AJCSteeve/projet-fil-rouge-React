import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export default function Login() {

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
        <div className="login-container">
            <h2>Connexion</h2>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Login :</label>
                    <input
                        type="username"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Entrez votre login"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe :</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Entrez votre mot de passe"
                    />
                </div>
                <button type="button" onClick={handleLogin} className="Login-button">
                    Se connecter
                </button>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
            </form>
        </div>
    );
}