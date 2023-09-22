import React, {useState} from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Register(){
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
        await axios.post("http://localhost:8080/api/auth/register", user) // note : url pas nécessairement le même que url partie
        navigate("/"); //navigate to home after submitting form

    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 border-warning">
                    <h2 className="text-center m-4">Inscription</h2>
                    <form onSubmit={(e)=>onSubmit((e))}>
                        <div div className="mb-3">
                            <label htmlFor="Username" className="form-label">
                                Nom d'utilisateur
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Entrez votre nom d'utilisateur"
                                name="username"
                                value={username}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        <div div className="mb-3">
                            <label htmlFor="Password" className="form-label">
                                Mot de passe
                            </label>
                            <input
                                type={"password"}
                                className="form-control"
                                placeholder="Entrez votre mot de passe"
                                name="password"
                                value={password}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        <div div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                E-mail
                            </label>
                            <input
                                type={"email"}
                                className="form-control"
                                placeholder="Entrez votre adresse mail"
                                name="email"
                                value={email}
                                onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        {/*<div div className="mb-3">*/}
                        {/*    <label htmlFor="phoneNumber" className="form-label">*/}
                        {/*        Numéro de téléphone*/}
                        {/*    </label>*/}
                        {/*    <input*/}
                        {/*        type={"tel"}*/}
                        {/*        className="form-control"*/}
                        {/*        placeholder="Entrez votre numéro de téléphone (optionnel)"*/}
                        {/*        name="phoneNumber"*/}
                        {/*        value={phoneNumber}*/}
                        {/*        onChange={(e)=>onInputChange(e)}*/}
                        {/*    />*/}
                        {/*</div>*/}
                        {/*<div div className="mb-3">*/}
                        {/*    <label htmlFor="photoUrl" className="form-label">*/}
                        {/*        Photo de profil*/}
                        {/*    </label>*/}
                        {/*    <input*/}
                        {/*        type={"url"}*/}
                        {/*        className="form-control"*/}
                        {/*        placeholder="URL vers votre photo de profil (optionnel)"*/}
                        {/*        name="photoUrl"*/}
                        {/*        value={photoUrl}*/}
                        {/*        onChange={(e)=>onInputChange(e)}*/}
                        {/*    />*/}
                        {/*</div>*/}
                        <div className="fa-pull-right">
                            <button type="submit" className="btn  btn-outline-warning mx-2">Annuler</button>
                        </div>
                        <div className="fa-pull-right">
                            <button type="submit" className="btn  btn-outline-dark mx-2">Soumettre</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;

