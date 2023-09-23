import React from 'react';
import "./header-store.css"
import { Container, Navbar, FormControl, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const HeaderStore = () => {
    return (
        <Container className="store-container">
            <Row className="store-row">
                <Col>
                    <div className="text-center">
                        <h3 className="header-title">Consultez nos tickets en vente</h3>
                    </div>
                </Col>
                <Col xs="auto">
                    <div>
                        <FormControl className="search-input" placeholder="Recherchez un ticket" />
                    </div>
                </Col>
                <Col>
                    <div>
                        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HeaderStore;