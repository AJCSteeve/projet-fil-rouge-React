    import axios from "axios";
    import {useNavigate} from "react-router-dom";
    import { useEffect, useState, useCallback} from "react";
    import {Button, Card, Row, Col} from "react-bootstrap";
    import './account-settings.css';


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
            <div className="account-main">
                <h1 className="account-title-main">Informations utilisateur</h1>
                <Card className={"account-card"}>
                    <Card.Body>
                        <Row>
                            <Col xs={6}>
                                <Card.Title className={"account-title"}>Identifiant</Card.Title>
                            </Col>
                            <Col xs={6}>
                                <Card.Text className={"account-text"}>{userData.username}</Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Body>
                        <Row>
                            <Col xs={6}>
                                <Card.Title className={"account-title"}>Téléphone</Card.Title>
                            </Col>
                            <Col xs={6}>
                                <Card.Text className={"account-text"}>{userData.phoneNumber}</Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Body>
                        <Row>
                            <Col xs={6}>
                                <Card.Title className={"account-title"}>Email</Card.Title>
                            </Col>
                            <Col xs={6}>
                                <Card.Text className={"account-text"}>{userData.email}</Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Body>
                        <Row>
                            <Col xs={6}>
                                <Card.Title className={"account-title"}>Photo</Card.Title>
                            </Col>
                            <Col xs={6}>
                                {/* <Card.Text className={"account-text"}>{userData.photoUrl}</Card.Text>*/}
                                {
                                    userData.photoUrl ? (
                                            <img src={userData.photoUrl}
                                                 alt="Photo de profil" className="user-photo" />) :
                                        (<div className="user-photo-placeholder">
                                            <p>Photo de l'utilisateur</p>
                                        </div>)
                                }
                            </Col>
                        </Row>
                    </Card.Body>

                </Card>
                <Button className="account-btn btn-deconnect" onClick={handleLogout}>Déconnexion</Button>
                <Button className="account-btn btn-delete " onClick={showConfirmation}>Supprimer mon profil</Button>

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
