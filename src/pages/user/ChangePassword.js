import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


export default function ChangePassword(){

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
        newpassword:"",
        confirmpassword:"",
    });

    const{ newpassword, confirmPassword }=user;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [passwordChanged, setPasswordChanged] = useState(false); // Suivre le changement de mot de passe

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [error, setError] = useState(null);

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

        if (newpassword !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }
        try {
            await axiosInstance.put(`/users/${idAsNumber}`,
                {password: newpassword,});
            setPasswordChanged(true);
            setError(null);
        }
        catch (error){
            console.error("Erreur:", error.message);
            setError("Une erreur s'est produite lors de la modification du mot de passe.");
        }
    };

    const loadUser = async ()=>{
        const result=await axiosInstance.get(`/users/${idAsNumber}`);
        setUser(result.data);
    };


    return(
        <div className="changepassword">
            <h1 className="mainhead1">Changer le mot de passe</h1>
            {passwordChanged &&
                (<div className="success-message">Mot de passe changé avec succès !</div>)}
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={(ev) => onSubmit(ev)}>
                <div className="form-group">
                    <label htmlFor="newpassword" className="form-label">Nouveau mot de passe <span>*</span></label>
                    <input
                        type="password"
                        id="newpassword"
                        className="form-control"
                        placeholder="Nouveau mot de passe svp"
                        name="newpassword"
                        value={newpassword}
                        onChange={(event) => onInputChange(event)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe <span>*</span></label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="form-control"
                        placeholder="Confirmer le mot de passe svp"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(event) => onInputChange(event)}/>
                </div>
                <button type="submit" className="mainbutton1">
                    Modifier
                </button>
                <button className="btn btn-outline-danger mx-2" onClick={() => navigate("/user/:activepage")}>Annuler</button>
            </form>
        </div>
    );
}