import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {NavLink} from "react-bootstrap";


export default function AccountSettings() {
    const axiosInstance = axios.create({
        baseURL: "http://localhost:8080/api",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, // Récupère le token JWT du stockage local
            "Content-Type": "application/json",
        },
    });

    let navigate = useNavigate();

    const idAsString = localStorage.getItem('userId'); // Récupère l'userId du stockage local et converti en entier
    const idAsNumber = parseInt(idAsString, 10);

    // Vérifier si la conversion a réussi (n'est pas NaN) et que l'ID est valide
    if (isNaN(idAsNumber) || idAsNumber <= 0) {
        console.error("L'ID n'est pas un nombre valide ou est manquant.");
        return null;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userData, setUserData] = useState({
        username: "",
        phoneNumber: "",
        photoUrl: "",
        email: "",
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const loadUser = useCallback(async () => {
        try {
            const response = await axiosInstance.get(`/users/${idAsNumber}`);
            setUserData(response.data);
        } catch (error) {
            console.error("Erreur", error.message);
        }
    }, [axiosInstance, idAsNumber]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const deleteUser = useCallback(async () => {
        try {
            await axiosInstance.delete(`/users/${idAsNumber}`);
            navigate("/user/:activepage");
        } catch (error) {
            console.error("Erreur:", error.message);
        }
    }, [axiosInstance, idAsNumber]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        loadUser();
    }, [loadUser]);

    return (
        <div className="orders">
            <h1 className="mainhead1">Informations utilisateur</h1>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Identifiant <span>*</span></label>
                    <input value={userData.username} readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber" className="form-label">Téléphone <span>*</span></label>
                    <input value={userData.phoneNumber} readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="photoUrl" className="form-label">Photo <span>*</span></label>
                    <input value={userData.photoUrl} readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email <span>*</span></label>
                    <input value={userData.email} readOnly />
                </div>
            </div>
            <button className="btn btn-danger mx-2" onClick={deleteUser}>Supprimer</button>
        </div>
    );
}
