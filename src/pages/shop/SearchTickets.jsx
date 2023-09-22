import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import ticketItems from "../../assets/items.json"
import StoreItem from "./StoreItem";

const SearchTickets = () => {

    return (
        <>
            <Container>
                <div className="d-flex justify-content-end mx-lg-5 mt-3">
                    <Button
                        style={{width: "4rem", height: "4rem", position: "relative", background: "white", color: 'black'}}
                        variant="outline-primary"
                        className="rounded-circle"
                    >
                        <FontAwesomeIcon icon={faShoppingCart} size="2xl" />
                        <div
                            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                            style={{
                                color: "black",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                transform: "translate(25%, 25%)",
                            }}
                        >3</div>
                    </Button>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="mb-3">
                        <h1>Tickets actuellement en vente</h1>
                    </div>
                    <div>
                        <Row md={2} xs={1} lg={3} className="g-3">
                            {ticketItems.map(item => (
                                <Col key={item.id}>
                                    <StoreItem {...item} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>

            </Container>
        </>
    );
};

export default SearchTickets;