import React, { useState } from 'react';
import { Container, FormControl, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./header-store.css"

const HeaderStore = () => {

    return (
        <Container className="store-container">
            <Row className="store-row">
                <Col xs="auto">
                    <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                </Col>

                <Col xs="auto">
                    <div className="text-center">
                        <h3 className="header-title">Consultez nos tickets en vente</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HeaderStore;