import axios from "axios";
import {useNavigate} from "react-router-dom";
import { useEffect, useState} from "react";
import {Button, Card} from "react-bootstrap";


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
    const loadUser = async () => {
        try {
            const response = await axiosInstance.get(`/users/${idAsNumber}`);
            setUserData(response.data);
        } catch (error) {
            console.error("Erreur", error.message);
        }
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const deleteUser = async () => {
        try {
            await axiosInstance.delete(`/users/${idAsNumber}`);
            navigate("/user/:activepage");
        } catch (error) {
            console.error("Erreur:", error.message);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("jwtToken");  // Effacez les données d'authentification du stockage local
        localStorage.removeItem("userId");
        navigate("/login");
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        loadUser();
    }, [loadUser]);

    return (
        <div className="orders">
            <h1 className="mainhead1">Informations utilisateur</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Identifiant</Card.Title>
                    <Card.Text>{userData.username}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Title>Téléphone</Card.Title>
                    <Card.Text>{userData.phoneNumber}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Title>Photo</Card.Title>
                    <Card.Text>{userData.photoUrl}</Card.Text>
                    {
                        userData.photoUrl ? (
                        <img src={userData.photoUrl}
                             alt="Photo de profil"
                             className="user-photo" />) : (<div className="user-photo-placeholder">
                            <p>Aucune photo de profil</p></div>)
                    }
                </Card.Body>
                <Card.Body>
                    <Card.Title>Email</Card.Title>
                    <Card.Text>{userData.email}</Card.Text>
                </Card.Body>
            </Card>
            <Button className="btn btn-secondary mx-2" onClick={handleLogout}>Déconnexion</Button>
            <Button className="btn btn-danger mx-2" onClick={deleteUser}>Supprimer mon profil</Button>
        </div>
    );
}
