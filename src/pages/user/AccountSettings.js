import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { Button, Card } from "react-bootstrap";

export default function AccountSettings() {
    const axiosInstance = axios.create({
        baseURL: "http://localhost:8080/api",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            "Content-Type": "application/json",
        },
    });

    let navigate = useNavigate();

    const idAsString = localStorage.getItem("userId");
    const idAsNumber = parseInt(idAsString, 10);

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
    const [confirmationVisible, setConfirmationVisible] = useState(false);

    const showConfirmation = () => {
        setConfirmationVisible(true);
    };

    const hideConfirmation = () => {
        setConfirmationVisible(false);
    };

    const deleteUser = async () => {
        try {
            await axiosInstance.delete(`/users/${idAsNumber}`);
            navigate("/user/:activepage");
        } catch (error) {
            console.error("Erreur:", error.message);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("jwtToken");
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
            <Card style={{ width: "18rem" }}>
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
                    {userData.photoUrl ? (
                        <img
                            src={userData.photoUrl}
                            alt="Photo de profil"
                            className="user-photo"
                        />
                    ) : (
                        <div className="user-photo-placeholder">
                            <p>Aucune photo de profil</p>
                        </div>
                    )}
                </Card.Body>
                <Card.Body>
                    <Card.Title>Email</Card.Title>
                    <Card.Text>{userData.email}</Card.Text>
                </Card.Body>
            </Card>
            <Button className="btn btn-secondary mx-2" onClick={handleLogout}>
                Déconnexion
            </Button>
            <Button className="btn btn-danger mx-2" onClick={showConfirmation}>
                Supprimer mon profil
            </Button>

            {confirmationVisible && (
                <div className="confirmation-dialog">
                    <p>Êtes-vous sûr de vouloir supprimer votre profil ?</p>
                    <button onClick={deleteUser}>Confirmer</button>
                    <button onClick={hideConfirmation}>Annuler</button>
                </div>
            )}
        </div>
    );
}